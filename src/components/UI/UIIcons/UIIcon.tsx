import React, { SyntheticEvent } from 'react';
import classnames, { Mapping } from 'classnames';
import _noop from 'lodash/noop';
import * as icons from './iconData';

type Props = {
  icon: keyof typeof icons;
  onClick?: (e: SyntheticEvent) => void;
  className?: Mapping | string;
};

export const UIIcon: React.FC<Props> = ({
  icon,
  onClick = _noop,
  className,
  ...restProps
}) => {
  const Icon = icons[icon];
  return (
    <div
      className={classnames('UI__icon flex align-center', className)}
      role="presentation"
      onClick={onClick}
      {...restProps}
    >
      {!!Icon && <Icon />}
    </div>
  );
};
