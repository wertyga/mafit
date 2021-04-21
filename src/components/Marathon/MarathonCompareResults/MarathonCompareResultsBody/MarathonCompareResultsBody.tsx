import React, { ChangeEvent } from 'react';
import { gfMarathon } from 'goldfish/gfMarathon';
import { MarathonManDataItem } from '../../MarathonManData/MarathonManDataItem/MarathonManDataItem';

type Props = {
  state: Record<string, string>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MarathonCompareResultsBody: React.FC<Props> = ({
  state,
  onChange,
}) => {
  return (
    <div>
      {Object.entries(gfMarathon.manData.bodyData).map(
        ([key, { image, description, unit, extend, extendTitle }]) => (
          <MarathonManDataItem
            key={key}
            name={key}
            unit={unit}
            image={image}
            value={state[key]}
            onChange={onChange}
            description={description}
            extendTitle={extendTitle}
            extend={extend}
          />
        )
      )}
    </div>
  );
};
