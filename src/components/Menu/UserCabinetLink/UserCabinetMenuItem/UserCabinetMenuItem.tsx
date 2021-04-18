import Link from 'next/link';
import React from 'react';

import { MenuItem } from 'types/menu';

import s from './styles.module.css';

type Props = MenuItem & {
  onClose: () => void;
};

export const UserCabinetMenuItem: React.FC<Props> = ({
  title,
  href,
  onClose,
}) => (
  <Link href={href}>
    <a role="presentation" className={s.link} onClick={onClose}>
      <h4>{title}</h4>
    </a>
  </Link>
);
