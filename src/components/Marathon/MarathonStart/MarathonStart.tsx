import React, { useMemo } from 'react';
import classnames from 'classnames';
import { UIListItem } from 'components/UI/UIListItem/UIListItem';
import { UIButton } from 'components/UI/UIButton/UIButton';
import { gfMarathon } from 'goldfish/gfMarathon';
import { gfCommon } from 'goldfish/gfCommon';
import useSelector from 'hooks/useSelector';

import { setMessage } from 'redux/actions/notify/notifyActions';
import { updateStartMarathonAction } from 'redux/actions/startMarathon/startMarathonActions';
import {
  useSaveStartMarathonMutation,
  useGetStartMarathonLazyQuery,
  GetStartMarathonQuery,
  GetStartMarathonDocument,
} from 'graphql/types';

import { MarathonUpload } from '../MarathonUpload/MarathonUpload';
import { MarathonManData } from '../MarathonManData/MarathonManData';
import { PFCCalculate } from '../PFCCalculate/PFCCalculate';

export const MarathonStart = () => {
  const {
    marathonStore: { dateStart, id: marathonId },
    userStore: { userId },
    startMarathonStore: {
      id: startMarathonId,
      status,
      manData = {},
      files = {},
      pfc = {},
    },
  } = useSelector(['marathonStore', 'userStore', 'startMarathonStore']);

  const [
    getMarathonStartHandler,
    { loading: getLoading },
  ] = useGetStartMarathonLazyQuery({
    onCompleted: ({ getStartMarathon }) => {
      if (!getStartMarathon.id) return;
      const {
        pfc: { __typename: pfcType, ...updatedPfc },
        manData: { __typename: manType, ...updatedManData },
        files: { __typename, ...updatedFiles },
        ...restData
      } = getStartMarathon;
      updateStartMarathonAction({
        pfc: updatedPfc,
        manData: updatedManData,
        files: updatedFiles,
        ...restData,
      });
    },
    onError: ({ message }) => {
      setMessage({ type: 'error', message });
    },
  });

  const [
    saveMarathonHandler,
    { loading: saveLoading },
  ] = useSaveStartMarathonMutation({
    onCompleted: ({ saveStartMarathon }) => {
      const {
        pfc: { __typename: pfcType, ...updatedPfc },
        manData: { __typename: manType, ...updatedManData },
        files: { __typename, ...updatedFiles },
        ...restData
      } = saveStartMarathon;
      updateStartMarathonAction({
        pfc: updatedPfc,
        manData: updatedManData,
        files: updatedFiles,
        ...restData,
      });
    },
    update: (cache, { data }) => {
      cache.writeQuery<GetStartMarathonQuery>({
        query: GetStartMarathonDocument,
        variables: {
          marathonId,
          userId,
        },
        data: {
          getStartMarathon: data.saveStartMarathon,
        },
      });
    },
    onError: ({ message }) => {
      setMessage({ type: 'error', message });
    },
  });

  const handleFileChange = (image: File, preview: string, name: string) => {
    updateStartMarathonAction({
      files: {
        ...files,
        [name]: image,
      },
    });
  };

  const handleManDataChange = ({ target: { name, value } }) => {
    updateStartMarathonAction({
      manData: {
        ...manData,
        [name]: Number(value),
      },
    });
  };

  const handleChangePFC = (type: string, name: string) => {
    updateStartMarathonAction({
      pfc: {
        ...pfc,
        [type]: name,
      },
    });
  };

  const handleSave = () =>
    saveMarathonHandler({
      variables: {
        data: {
          id: startMarathonId,
          marathonId,
          userId,
          files,
          pfc,
          manData,
        },
      },
    });

  const handleFetchMarathonStartData = () => {
    if (!startMarathonId) return;
    getMarathonStartHandler({
      variables: {
        marathonId,
        userId,
      },
    });
  };

  const isSubmitDisabled =
    Object.values({
      ...pfc,
      ...files,
      ...manData,
    }).find(value => !value) !== undefined;

  const uploadedPreviews = useMemo(() => {
    return Object.entries(files).reduce((acc, [key, file]) => {
      if (typeof file === 'string') return { ...acc, [key]: file };
      return acc;
    }, {});
  }, [files]);
  return (
    <UIListItem
      title={gfMarathon.startTitle}
      description={gfMarathon.startDescription}
      date={dateStart}
      onOpen={handleFetchMarathonStartData}
      status={status}
      scrollOpen
    >
      <div className={classnames({ pending: saveLoading || getLoading })}>
        <MarathonUpload
          onChange={handleFileChange}
          previews={uploadedPreviews}
        />
        <MarathonManData state={manData} onChange={handleManDataChange} />
        <PFCCalculate pfc={pfc} onSelect={handleChangePFC} />

        <div className="row flex justify-center-m">
          <UIButton
            onClick={handleSave}
            className="mt-6"
            round
            disabled={isSubmitDisabled}
          >
            {gfCommon.save}
          </UIButton>
        </div>
      </div>
    </UIListItem>
  );
};
