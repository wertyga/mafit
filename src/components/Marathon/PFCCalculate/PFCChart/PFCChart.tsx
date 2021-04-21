import React from 'react';
import { getRecommendationCal } from 'goldfish/gfPFC';
import { gfProductsBasket } from 'goldfish/gfProductsBasket';
import { PfcCalculated, Aim } from 'graphql/types';

import { pfcPercentage } from './helpers';

import s from './styles.module.css';

type Props = PfcCalculated & {
  aim: Aim;
};

export const PFCChart: React.FC<Props> = ({
  dailyProtein,
  dailyFats,
  dailyCarbs,
  calculateFormula,
  aim,
  recommendCal,
}) => {
  const [protein, fats, carbs] = pfcPercentage(
    dailyProtein,
    dailyFats,
    dailyCarbs,
    calculateFormula
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
      <p
        className="text-center"
        dangerouslySetInnerHTML={{
          __html: getRecommendationCal(aim, recommendCal),
        }}
      />
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
