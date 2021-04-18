import React from 'react';
import classnames from 'classnames';

import s from './styles.module.css';

type Props = {
  name: string;
  label?: string;
  checked?: boolean;
  invert?: boolean;
  className?: string | Record<string, boolean>;
  onSelect: (v: boolean, n: string) => void;
};

export const UICheckbox: React.FC<Props> = ({
  name,
  checked,
  onSelect,
  label,
  className,
  invert,
}) => {
  const handleChange = () => {
    onSelect(!checked, name);
  };

  return (
    <div
      className={classnames(
        'UI__checkbox flex align-center pointer',
        className
      )}
      role="presentation"
      onClick={handleChange}
    >
      <label htmlFor={`checkbox-${name}`}>
        <span
          className={classnames({
            [s.checkbox]: true,
            [s.checked]: checked,
            [s.invert]: invert,
          })}
        >
          <span className={s.checkMark} />
        </span>
        <input
          type="checkbox"
          id={`checkbox-${name}`}
          className={s.input}
          checked={checked}
          readOnly
        />
      </label>
      {!!label && <span className={s.label}>{label}</span>}
    </div>
  );
};
