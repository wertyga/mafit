import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { MenuItem } from 'types/menu';

import s from './styles.module.css';

type Props = MenuItem & {
  onClose: () => void;
  isActiveLink: boolean;
};

export const MobileMenuItem: React.FC<Props> = ({
  title,
  href,
  isActiveLink,
  onClose,
}) => (
  <Link href={href}>
    <a
      role="presentation"
      className={classnames({
        [s.link]: true,
        [s.active]: isActiveLink,
      })}
      onClick={onClose}
    >
      <h4 className="mb-0">{title}</h4>
    </a>
  </Link>
);
