import React from 'react';
import _noop from 'lodash/noop';
import classnames from 'classnames';

import s from './styles.module.css';

type Props = {
  className?: string | Record<string, boolean>;
  disabled?: boolean;
  round?: boolean;
  success?: boolean;
  onClick?: () => void;
};

export const UIButton: React.FC<Props> = ({
  children,
  className,
  disabled,
  onClick = _noop,
  round,
  success,
}) => {
  return (
    <button
      type="button"
      className={classnames('UI__button', className, {
        [s.button]: true,
        [s.round]: round,
        [s.success]: success,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
