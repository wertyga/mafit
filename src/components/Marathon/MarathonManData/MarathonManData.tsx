import React, { ChangeEvent } from 'react';
import { gfMarathon } from 'goldfish/gfMarathon';
import { MarathonManDataItem } from './MarathonManDataItem/MarathonManDataItem';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  state: Partial<
    Record<
      | keyof typeof gfMarathon.manData.commonData
      | keyof typeof gfMarathon.manData.bodyData,
      string
    >
  >;
};

export const MarathonManData: React.FC<Props> = ({ onChange, state }) => {
  return (
    <div className="row mt-2">
      <h4>{gfMarathon.enterCommonData}</h4>
      {Object.entries(gfMarathon.manData.commonData).map(
        ([key, { image, description, unit }]) => (
          <MarathonManDataItem
            key={key}
            name={key}
            image={image}
            unit={unit}
            description={description}
            onChange={onChange}
            value={state[key]}
          />
        )
      )}

      <h4 className="mt-8">{gfMarathon.enterDataBefore}</h4>
      {Object.entries(gfMarathon.manData.bodyData).map(
        ([key, { image, description, unit, extend, extendTitle }]) => (
          <MarathonManDataItem
            key={key}
            name={key}
            unit={unit}
            image={image}
            description={description}
            onChange={onChange}
            value={state[key]}
            extendTitle={extendTitle}
            extend={extend}
          />
        )
      )}
    </div>
  );
};
