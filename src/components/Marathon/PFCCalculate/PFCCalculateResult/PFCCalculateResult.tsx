import React from 'react';
import { gfPFC } from 'goldfish/gfPFC';

import { AIM_TYPES, PFCCalculateFormulaType } from 'types/pfc';

import s from './styles.module.css';

type Props = {
  calculate: PFCCalculateFormulaType;
  calNorma: number;
  minCal: number;
  recommendCal: number;
  dailyProtein: number;
  dailyFats: number;
  dailyCarbs: number;
  type: AIM_TYPES;
};

export const PFCCalculateResult: React.FC<Props> = ({
  calNorma,
  minCal,
  recommendCal,
  dailyProtein,
  dailyFats,
  dailyCarbs,
  calculate,
  type,
}) => {
  const result = Object.entries(calculate).map(([key, cal]) =>
    gfPFC.calculate(key, cal)
  );
  return (
    <div className={s.description}>
      <div>
        <p>{`${gfPFC.dailyCal}:`}</p>
        <span>{gfPFC.byFormula(calNorma)}</span>
      </div>
      <div>
        <p>{`${gfPFC.recommendations[type]}:`}</p>
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
