import React, { useState } from 'react';
import Link from 'next/link';
import { gfMarathon } from 'goldfish/gfMarathon';
import { gfTraining } from 'goldfish/gfTraining';
import { gfProgressItem } from 'goldfish/gfProgressItem';
import { gfCommon } from 'goldfish/gfCommon';
import { MarathonManDataItem } from 'components/Marathon/MarathonManData/MarathonManDataItem/MarathonManDataItem';
import { UIListItem } from 'components/UI/UIListItem/UIListItem';
import { UIButton } from 'components/UI/UIButton/UIButton';

import { TRAINING_STATUSES } from 'types/training';

export const TrainingProgress = () => {
  const [state, setState] = useState(
    Object.entries(gfMarathon.manData.bodyData).reduce(
      (acc, [key]) => ({
        ...acc,
        [key]: '',
      }),
      {}
    )
  );

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log(state);
  };

  const isSubmitDisabled = !!Object.entries(state).find(([, value]) => !value);
  return (
    <UIListItem
      title={gfProgressItem.title}
      description={gfProgressItem.description}
      date={new Date().toString()}
      status={gfTraining.status[TRAINING_STATUSES.INPUT]}
      locked={false}
      scrollOpen
    >
      <div className="row">
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
