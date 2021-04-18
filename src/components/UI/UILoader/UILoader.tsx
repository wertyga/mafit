import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import { ClassName } from 'types/root';

import s from './styles.module.css';

type Props = {
  style?: CSSProperties;
  className?: ClassName;
};

export const UILoader: React.FC<Props> = ({ style = {}, className }) => {
  return (
    <div className={classnames(className)}>
      <div className={s.loader} style={style} />
    </div>
  );
};
