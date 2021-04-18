import React from 'react';
import { gfMarathon } from 'goldfish/gfMarathon';
import { MarathonManDataItem } from '../MarathonManDataItem/MarathonManDataItem';
import { Props as ManDataType } from '../MarathonManData';

export const MarathonBodyData: React.FC<ManDataType> = ({
  state,
  onChange,
}) => {
  return (
    <>
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
    </>
  );
};
