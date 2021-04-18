import Link from 'next/link';
import React from 'react';

import s from './styles.module.css';

type Props = {
  title: string;
  href: string;
  onClose: () => void;
};

export const UserCabinetMenuItem: React.FC<Props> = ({
  title,
  href,
  onClose,
}) => (
  <Link href={href}>
    <a role="presentation" className={s.link} onClick={onClose}>
      <h4 className="mb-0">{title}</h4>
    </a>
  </Link>
);
