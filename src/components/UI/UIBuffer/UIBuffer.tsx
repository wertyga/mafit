import React from 'react';
import classnames from 'classnames';

import { ClassName } from 'types/root';

import s from './styles.module.css';

type Props = {
  className?: ClassName;
  mini?: boolean;
  center?: boolean;
};

export const UIBuffer: React.FC<Props> = ({
  className,
  children,
  mini,
  center,
}) => (
  <div
    className={classnames('UI__buffer container fluid', className, {
      [s.wrapper]: true,
      [s.mini]: mini,
      [s.center]: center,
    })}
  >
    {children}
  </div>
);
