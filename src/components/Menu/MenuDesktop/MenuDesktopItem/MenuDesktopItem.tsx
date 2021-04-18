import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.module.css';

type Props = {
  title: string;
  href: string;
  isActive: (pathname: string) => boolean;
};

export const MenuDesktopItem: React.FC<Props> = ({ title, href, isActive }) => {
  const router = useRouter();
  const isActiveLink = isActive(router.pathname);
  return (
    <div
      className={classnames({
        [styles.active]: isActiveLink,
        [styles.wrapper]: true,
      })}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};
