import React, { ChangeEvent } from 'react';
import { gfMarathon } from 'goldfish/gfMarathon';

import { ManData } from 'graphql/types';

import { MarathonManDataItem } from './MarathonManDataItem/MarathonManDataItem';
import { MarathonBodyData } from './MarathonBodyData/MarathonBodyData';

export type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  state: ManData;
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
      <MarathonBodyData state={state} onChange={onChange} />
    </div>
  );
};
