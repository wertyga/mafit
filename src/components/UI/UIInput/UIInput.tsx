import React, { ChangeEvent } from 'react';
import classnames from 'classnames';

import s from './styles.module.css';

type Props = {
  type?: string;
  value: string;
  postfix?: string;
  name: string;
  mini?: boolean;
  numeric?: boolean;
  accent?: boolean;
  light?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const UIInput: React.FC<Props> = ({
  type = 'text',
  value,
  onChange,
  postfix,
  name,
  mini,
  numeric,
  accent,
  light,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (numeric) {
      e.target.value = e.target.value.replace(/\D/g, '');
    }

    return onChange(e);
  };

  return (
    <div
      className={classnames({
        [s.wrapper]: true,
        [s.mini]: mini,
        [s.accent]: accent,
        [s.light]: light,
      })}
    >
      <input
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        className={s.input}
      />
      {!!postfix && <h5 className={s.postfix}>{postfix}</h5>}
    </div>
  );
};
