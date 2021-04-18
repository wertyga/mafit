import React from 'react';
import { gfPFC } from 'goldfish/gfPFC';
import { gfCommon } from 'goldfish/gfCommon';
import { UICheckbox } from 'components/UI/UICheckbox/UICheckbox';
import { UIButton } from 'components/UI/UIButton/UIButton';
import { PFCCalculateResult } from './PFCCalculateResult/PFCCalculateResult';
import { PFCChart } from './PFCChart/PFCChart';

import s from './styles.module.css';

// MOCK
const MOCK_RESULT = {
  calNorma: 123,
  minCal: 123,
  recommendCal: 228,
  dailyProtein: 12,
  dailyFats: 12,
  dailyCarbs: 12,
  calculate: {
    fats: 3,
    protein: 5,
    carbs: 7,
  },
  type: 'looseFat',
};

type Props = {
  gender: string;
  activity: string;
  aim: string;
  onSelect: (t: string, n: string) => void;
};

export const PFCCalculate: React.FC<Props> = ({
  onSelect,
  gender,
  activity,
  aim,
}) => {
  const handleChange = (type: string) => (value, name) => onSelect(type, name);

  const disableCalculate = !gender || !activity || !aim;
  return (
    <div className="row pt-6">
      <h4>{gfPFC.marathonTitle}</h4>

      <div>
        <h5 className="mb-3">{`${gfPFC.yourGender}:`}</h5>
        <div>
          <UICheckbox
            label={gfCommon.men}
            name="men"
            onSelect={handleChange('gender')}
            checked={gender === 'men'}
            className="mb-4"
          />
          <UICheckbox
            label={gfCommon.women}
            name="women"
            onSelect={handleChange('gender')}
            checked={gender === 'women'}
            className="mb-4"
          />
        </div>
      </div>

      <div>
        <h5 className="mb-3">{gfPFC.physicalActivity}</h5>
        <div>
          {Object.entries(gfPFC.activities).map(([key, value]) => (
            <UICheckbox
              label={value}
              key={key}
              name={key}
              onSelect={handleChange('activity')}
              checked={activity === key}
              className="mb-4"
            />
          ))}
        </div>
      </div>

      <div>
        <h5 className="mb-3">{gfPFC.chooseAim}</h5>
        <div>
          {Object.entries(gfPFC.aims).map(([key, value]) => (
            <UICheckbox
              label={value}
              key={key}
              name={key}
              onSelect={handleChange('aim')}
              checked={aim === key}
              className="mb-4"
            />
          ))}
        </div>
      </div>

      <UIButton className="mt-6" disabled={disableCalculate}>
        {gfCommon.calculate}
      </UIButton>

      <h4 className="mt-8 mb-4">{`${gfCommon.results}:`}</h4>
      <div className={s.pfcResult}>
        <PFCCalculateResult {...MOCK_RESULT} />
        <PFCChart
          recommendCal={MOCK_RESULT.recommendCal}
          type={MOCK_RESULT.type}
          calculate={MOCK_RESULT.calculate}
          dailyProtein={MOCK_RESULT.dailyProtein}
          dailyFats={MOCK_RESULT.dailyFats}
          dailyCarbs={MOCK_RESULT.dailyCarbs}
        />
      </div>
    </div>
  );
};
