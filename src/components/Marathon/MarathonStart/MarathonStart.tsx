import React, { useState } from 'react';

import { UIListItem } from 'components/UI/UIListItem/UIListItem';
import { UIButton } from 'components/UI/UIButton/UIButton';
import { gfMarathon } from 'goldfish/gfMarathon';
import { gfTraining } from 'goldfish/gfTraining';
import { gfCommon } from 'goldfish/gfCommon';
import useSelector from 'hooks/useSelector';

import { TRAINING_STATUSES } from 'types/training';

import { MarathonUpload } from '../MarathonUpload/MarathonUpload';
import { MarathonManData } from '../MarathonManData/MarathonManData';
import { PFCCalculate } from '../PFCCalculate/PFCCalculate';

import { bodyDataInitState, commonDataInitState } from './helpers';

export const MarathonStart = () => {
  const {
    marathonStore: { dateStart },
  } = useSelector('marathonStore');
  const [state, setState] = useState({
    files: {
      front: '',
      rear: '',
      right: '',
      left: '',
      video: '',
    },
    pfc: {
      gender: '',
      activity: '',
      aim: '',
    },
    manData: {
      ...bodyDataInitState,
      ...commonDataInitState,
    },
  });

  const handleFileChange = (image: File, preview: string, name: string) => {
    setState(prev => ({ ...prev, files: { ...prev.files, [name]: image } }));
  };

  const handleManDataChange = ({ target: { name, value } }) => {
    setState(prev => ({
      ...prev,
      manData: {
        ...prev.manData,
        [name]: value,
      },
    }));
  };

  const handleChangePFC = (type: string, name: string) => {
    setState(prev => ({
      ...prev,
      pfc: {
        ...prev.pfc,
        [type]: name,
      },
    }));
  };

  const handleSave = () => {
    console.log(state);
  };

  return (
    <UIListItem
      title={gfMarathon.startTitle}
      description={gfMarathon.startDescription}
      date={dateStart}
      status={gfTraining.status[TRAINING_STATUSES.INPUT]}
      scrollOpen
    >
      <MarathonUpload onChange={handleFileChange} />
      <MarathonManData state={state.manData} onChange={handleManDataChange} />
      <PFCCalculate {...state.pfc} onSelect={handleChangePFC} />

      <div className="row flex justify-center-m">
        <UIButton onClick={handleSave} className="mt-6" round>
          {gfCommon.save}
        </UIButton>
      </div>
    </UIListItem>
  );
};
