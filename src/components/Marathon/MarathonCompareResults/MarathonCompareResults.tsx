import React, { useState } from 'react';
import { gfMarathon } from 'goldfish/gfMarathon';
import { gfTraining } from 'goldfish/gfTraining';
import { gfCommon } from 'goldfish/gfCommon';
import { gfProgressItem } from 'goldfish/gfProgressItem';
import { UIListItem } from 'components/UI/UIListItem/UIListItem';
import { UIButton } from 'components/UI/UIButton/UIButton';

import { Training_Statuses } from 'graphql/types';

import { MarathonCompareResultsBody } from '../MarathonCompareResults/MarathonCompareResultsBody/MarathonCompareResultsBody';
import { MarathonResultsUpload } from './MarathonResultsUpload/MarathonResultsUpload';
import { bodyDataInitState } from '../MarathonStart/helpers';

import s from './styles.module.css';

export const MarathonCompareResults = ({ date }) => {
  const [state, setState] = useState({
    files: {
      photoBefore: '',
      photoAfter: '',
    },
    body: bodyDataInitState,
  });

  const handleChangeFile = (file: File, name: string) => {
    setState(prev => ({ ...prev, files: { ...prev.files, [name]: file } }));
  };

  const handleBodyDataChange = ({ target: { name, value } }) => {
    setState(prev => ({
      ...prev,
      body: { ...prev.body, [name]: value },
    }));
  };

  const handleSave = () => {
    console.log(state);
  };

  const isSubmitDisabled =
    Object.values(state.files).find(value => !value) !== undefined ||
    Object.values(state.body).find(({ before, after }) => !before || !after) !==
      undefined;
  return (
    <div>
      <span className={s.topBuffer} />
      <UIListItem
        title={gfMarathon.compareResultsTitle}
        description={gfMarathon.compareResultsDescription}
        date={date}
        status={gfTraining.status[Training_Statuses.Input]} // MOCK
        className={s.wrapper}
      >
        <div className="row">
          <h4>{gfCommon.loadPhoto}</h4>
          <MarathonResultsUpload onChange={handleChangeFile} />
        </div>

        <div className="row">
          <h4 className="my-5">{gfProgressItem.enterData}</h4>
          <MarathonCompareResultsBody
            state={state.body}
            onChange={handleBodyDataChange}
          />

          <div className="flex justify-center-m">
            <UIButton
              onClick={handleSave}
              className="mt-9"
              disabled={isSubmitDisabled}
              round
            >
              {gfCommon.save}
            </UIButton>
          </div>
        </div>
      </UIListItem>
    </div>
  );
};
