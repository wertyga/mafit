import React, { useState } from 'react';
import _noop from 'lodash/noop';
import classnames from 'classnames';
import _isEmpty from 'lodash/isEmpty';
import { gfPFC } from 'goldfish/gfPFC';
import { gfCommon } from 'goldfish/gfCommon';
import { UICheckbox } from 'components/UI/UICheckbox/UICheckbox';
import { UIButton } from 'components/UI/UIButton/UIButton';

import { setMessage } from 'redux/actions/notify/notifyActions';
import {
  Pfc,
  useCalculatePfcLazyQuery,
  PfcCalculated,
  Gender,
  Aim,
} from 'graphql/types';

import { PFCCalculateResult } from './PFCCalculateResult/PFCCalculateResult';
import { PFCChart } from './PFCChart/PFCChart';

import s from './styles.module.css';

type Props = {
  pfc: Pfc;
  onSelect: (t: string, n: string) => void;
  onCalculated?: (s: boolean) => void;
};

type StateType = PfcCalculated & {
  aim: Aim;
};

export const PFCCalculate: React.FC<Props> = ({
  onSelect,
  pfc,
  onCalculated = _noop,
}) => {
  const [state, setState] = useState<StateType>({} as StateType);
  const [calculate, { loading }] = useCalculatePfcLazyQuery({
    onCompleted: ({ calculatePFC }) => {
      const { __typename, ...restData } = calculatePFC || {
        calculateFormula: {},
      };
      const {
        calculateFormula: { __typename: formulaTypeName, ...formula },
      } = restData;
      setState({
        ...restData,
        calculateFormula: formula,
        aim: pfc.aim,
      } as StateType);
      onCalculated(true);
    },
    onError: ({ message }) => {
      setMessage({ type: 'error', message });
    },
  });

  const handleCalculate = () => {
    calculate({
      variables: {
        data: pfc,
      },
    });
  };

  const handleChange = (type: string) => (value, name) => onSelect(type, name);

  const disableCalculate = !pfc.gender || !pfc.activity || !pfc.aim;
  return (
    <div className={classnames('row pt-6', { pending: loading })}>
      <h4>{gfPFC.marathonTitle}</h4>

      <div>
        <h5 className="mb-3">{`${gfPFC.yourGender}:`}</h5>
        <div>
          <UICheckbox
            label={gfCommon.men}
            name={Gender.Men}
            onSelect={handleChange('gender')}
            checked={pfc.gender === Gender.Men}
            className="mb-4"
          />
          <UICheckbox
            label={gfCommon.women}
            name={Gender.Women}
            onSelect={handleChange('gender')}
            checked={pfc.gender === Gender.Women}
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
              checked={pfc.activity === key}
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
              checked={pfc.aim === key}
              className="mb-4"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center-m">
        <UIButton
          className="mt-6"
          disabled={disableCalculate}
          onClick={handleCalculate}
          round
        >
          {gfCommon.calculate}
        </UIButton>
      </div>

      {!_isEmpty(state) && (
        <>
          <h4 className="mt-8 mb-4">{`${gfCommon.results}:`}</h4>
          <div className={s.pfcResult}>
            <PFCCalculateResult {...state} />
            <PFCChart {...state} />
          </div>
        </>
      )}
    </div>
  );
};
