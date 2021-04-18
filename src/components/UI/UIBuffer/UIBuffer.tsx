import React from 'react';
import classnames, { Mapping } from 'classnames';

import s from './styles.module.css';

type Props = {
  className?: Mapping;
  mini?: boolean;
};

export const UIBuffer: React.FC<Props> = ({ className, children, mini }) => (
  <div
    className={classnames('UI__buffer container fluid', className, {
      [s.mini]: mini,
      [s.wrapper]: true,
    })}
  >
    {children}
  </div>
);
