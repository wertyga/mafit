import React, { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { gfMarathon } from 'goldfish/gfMarathon';
import { gfProgressItem } from 'goldfish/gfProgressItem';
import { gfCommon } from 'goldfish/gfCommon';
import { MarathonManDataItem } from 'components/Marathon/MarathonManData/MarathonManDataItem/MarathonManDataItem';
import { UIListItem } from 'components/UI/UIListItem/UIListItem';
import { UIButton } from 'components/UI/UIButton/UIButton';

import useSelector from 'hooks/useSelector';
import { updateProgressAction } from 'redux/actions/progress/progressActions';
import { setMessage } from 'redux/actions/notify/notifyActions';
import {
  Progress,
  useSaveProgressMutation,
  useGetProgressLazyQuery,
  GetProgressQuery,
  GetProgressDocument,
} from 'graphql/types';

export const TrainingProgress: React.FC<Progress> = ({ id: progressId }) => {
  const {
    progressStore,
    marathonStore: { id: marathonId },
    userStore: { userId },
  } = useSelector(['progressStore', 'marathonStore', 'userStore']);
  const [state, setState] = useState(() => {
    const { weight, abs, butt, chest, date, status, trainingId } =
      progressStore.find(item => item.id === progressId) || ({} as Progress);
    return {
      date,
      status,
      trainingId,
      weight,
      abs,
      butt,
      chest,
    };
  });

  const [fetchProgress, { loading: getLoading }] = useGetProgressLazyQuery({
    onCompleted: ({ getProgress }) => {
      const { __typename, ...rest } = getProgress || {};
      setState(prev => ({ ...prev, ...rest }));
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });
  const [
    saveProgressHandler,
    { loading: saveLoading },
  ] = useSaveProgressMutation({
    onCompleted: ({ saveProgress }) => {
      updateProgressAction(progressId, saveProgress);
      setState(prev => ({ ...prev, ...saveProgress }));
    },
    update: (cache, { data }) => {
      cache.writeQuery<GetProgressQuery>({
        query: GetProgressDocument,
        variables: { id: data.saveProgress.id },
        data: {
          getProgress: data.saveProgress,
        },
      });
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleSave = () => {
    const { status, ...payload } = state;
    saveProgressHandler({
      variables: {
        marathonId,
        userId,
        data: {
          id: progressId,
          ...payload,
        },
      },
    });
  };

  const handleFetchProgress = () => {
    if (!progressId) return;
    fetchProgress({
      variables: {
        id: progressId,
      },
    });
  };

  const isSubmitDisabled = !!Object.entries(state).find(
    ([key, value]) => !value && key !== 'id'
  );
  const loading = getLoading || saveLoading;
  return (
    <UIListItem
      title={gfProgressItem.title}
      description={gfProgressItem.description}
      date={state.date}
      status={state.status}
      onOpen={handleFetchProgress}
      scrollOpen
    >
      <div className={classnames('row', { pending: loading })}>
        <h4 className="mt-5 mb-2">{`${gfProgressItem.enterData}:`}</h4>
        <p className="mb-5">
          <span>{gfProgressItem.contentDescriptionPrefix}</span>
          <Link href="/progress">
            <a style={{ color: 'var(--color-accent)' }} className="mx-2">
              Прогресс
            </a>
          </Link>
          <span>{gfProgressItem.contentDescriptionPostfix}</span>
        </p>
        <div>
          {Object.entries(gfMarathon.manData.bodyData).map(
            ([key, { image, description, unit }]) => (
              <MarathonManDataItem
                key={key}
                name={key}
                unit={unit}
                image={image}
                description={description}
                onChange={handleChange}
                value={state[key]}
              />
            )
          )}
        </div>

        <UIButton
          disabled={isSubmitDisabled}
          onClick={handleSave}
          className="mt-8"
        >
          {gfCommon.save}
        </UIButton>
      </div>
    </UIListItem>
  );
};
