import React from 'react';
import { gfPFC } from 'goldfish/gfPFC';

import { PfcCalculated, Aim, PfcCalculateFormula } from 'graphql/types';

import s from './styles.module.css';

type Props = PfcCalculated & {
  aim: Aim;
  calculateFormula: Omit<PfcCalculateFormula, '__typename'>;
};

export const PFCCalculateResult: React.FC<Props> = ({
  normaCal,
  minCal,
  recommendCal,
  dailyProtein,
  dailyFats,
  dailyCarbs,
  calculateFormula,
  aim,
}) => {
  const result = Object.entries(
    calculateFormula as Omit<PfcCalculateFormula, '__typename'>
  ).map(([key, cal]) => gfPFC.calculate(key, cal));
  return (
    <div className={s.description}>
      <div>
        <p>{`${gfPFC.dailyCal}:`}</p>
        <span>{gfPFC.byFormula(normaCal)}</span>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{ __html: `${gfPFC.recommendations[aim]}:` }}
        />
        <span>{gfPFC.minCal(minCal)}</span>
        <span>{gfPFC.recommendCal(recommendCal)}</span>
        <span>{gfPFC.dailyProtein(dailyProtein)}</span>
        <span>{gfPFC.dailyFats(dailyFats)}</span>
        <span>{gfPFC.dailyCarbs(dailyCarbs)}</span>
      </div>
      <div>
        <p>{`${gfPFC.calculateText}:`}</p>
        {result.map(str => (
          <span key={str}>{str}</span>
        ))}
      </div>
    </div>
  );
};
