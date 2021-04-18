import React, { ChangeEvent } from 'react';
import { gfCommon } from 'goldfish/gfCommon';
import { gfTraining } from 'goldfish/gfTraining';
import { UICheckbox } from 'components/UI/UICheckbox/UICheckbox';
import { UITextarea } from 'components/UI/UITextarea/UITextarea';
import { UIButton } from 'components/UI/UIButton/UIButton';

import { Feedback } from 'graphql/types';

import s from './styles.module.css';

type Props = {
  state: Omit<Feedback, 'trainingId'>;
  onStatusChange: (c: boolean, n: string) => void;
  onDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSave: () => void;
};

export const TrainingTaskUnFilled: React.FC<Props> = ({
  state,
  onStatusChange,
  onDescriptionChange,
  handleSave,
}) => {
  const isSubmitDisabled =
    !state.results || !state.rating || !state.dayResult || !state.foods;
  return (
    <div className={s.descriptions}>
      <span className={s.requiredMark}>{gfCommon.requiredMark}</span>
      <div className="flex">
        <h4>{gfTraining.trainingDone}</h4>
        <span className={s.required}>*</span>
      </div>
      <div className={s.checkboxes}>
        <UICheckbox
          label={gfCommon.yes}
          checked={state.status}
          name="yes"
          onSelect={onStatusChange}
        />
        <UICheckbox
          label={gfCommon.no}
          checked={!state.status}
          name="no"
          onSelect={onStatusChange}
        />
      </div>
      <div>
        <UITextarea
          className="mb-5"
          value={state.results}
          onChange={onDescriptionChange}
          name="results"
          title={gfTraining.results}
          required
        />
        <UITextarea
          className="mb-5"
          value={state.foods}
          onChange={onDescriptionChange}
          name="foods"
          title={gfTraining.foods}
          required
        />
        <UITextarea
          className="mb-5"
          value={state.dayResult}
          onChange={onDescriptionChange}
          name="dayResult"
          title={gfTraining.dayResults}
          required
        />
      </div>

      <UIButton disabled={isSubmitDisabled} onClick={handleSave} round>
        {gfTraining.sendResponse}
      </UIButton>
    </div>
  );
};
