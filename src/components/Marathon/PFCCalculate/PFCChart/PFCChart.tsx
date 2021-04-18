import React from 'react';
import { getRecommendationCal } from 'goldfish/gfPFC';
import { gfProductsBasket } from 'goldfish/gfProductsBasket';
import { PFCCalculateFormulaType, AIM_TYPES } from 'types/pfc';

import { pfcPercentage } from './helpers';

import s from './styles.module.css';

type Props = {
  calculate: PFCCalculateFormulaType;
  dailyProtein: number;
  dailyFats: number;
  dailyCarbs: number;
  recommendCal: number;
  type: AIM_TYPES;
};

export const PFCChart: React.FC<Props> = ({
  dailyProtein,
  dailyFats,
  dailyCarbs,
  calculate,
  type,
  recommendCal,
}) => {
  const [protein, fats, carbs] = pfcPercentage(
    dailyProtein,
    dailyFats,
    dailyCarbs,
    calculate
  );
  return (
    <div className={s.wrapper}>
      <div
        className={s.chart}
        style={{
          background: `
          conic-gradient(
          ${protein.color} 0,
          ${protein.color} ${protein.percent}%,
          ${fats.color} 0,
          ${fats.color} ${fats.percent}%,
          ${carbs.color} 0,
          ${carbs.color} ${carbs.percent}%
          )`,
        }}
      />
      <p>{getRecommendationCal(type, recommendCal)}</p>
      <div className={s.legendContainer}>
        {[protein, fats, carbs].map(({ name, color }) => (
          <div key={name} className={s.legend}>
            <span
              className={s.legendColor}
              style={{ backgroundColor: color }}
            />
            <span className={s.legendText}>{gfProductsBasket.types[name]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
