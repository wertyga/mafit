import React, { ChangeEvent } from 'react';
import { gfMarathon } from 'goldfish/gfMarathon';
import { gfCommon } from 'goldfish/gfCommon';
import { UIInput } from 'components/UI/UIInput/UIInput';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';
import { MarathonManDataItem } from '../../MarathonManData/MarathonManDataItem/MarathonManDataItem';

import s from './styles.module.css';

type Props = {
  state: Record<string, { before: string; after: string }>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MarathonCompareResultsBody: React.FC<Props> = ({
  state,
  onChange,
}) => {
  return (
    <div>
      <div className={s.upTitles}>
        <h5 className={s.upTitle}>{gfCommon.before}</h5>
        <h5 className={s.upTitle}>{gfCommon.after}</h5>
      </div>
      {Object.entries(gfMarathon.manData.bodyData).map(
        ([key, { image, description, unit, extend, extendTitle }]) => (
          <MarathonManDataItem
            key={key}
            name={`${key}/after`}
            unit={unit}
            image={image}
            description={description}
            extendTitle={extendTitle}
            extend={extend}
            inputSlot={
              <div className={s.inputs}>
                <div className={s.upTitlesMobile}>
                  <h5 className={s.upTitle}>{gfCommon.before}</h5>
                  <h5 className={s.upTitle}>{gfCommon.after}</h5>
                </div>
                <div className="flex">
                  <UIInput
                    value={state[key].before}
                    onChange={onChange}
                    name={`${key}/before`}
                    postfix={unit}
                    numeric
                    mini
                    accent
                  />
                  <UIIcon icon="arrowRight" className="mx-8" />
                  <UIInput
                    value={state[key].after}
                    onChange={onChange}
                    name={`${key}/after`}
                    postfix={unit}
                    numeric
                    mini
                    accent
                  />
                </div>
              </div>
            }
          />
        )
      )}
    </div>
  );
};
