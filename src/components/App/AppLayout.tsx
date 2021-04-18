import React from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { gfApp } from 'goldfish/gfApp';
import { Menu } from 'components/Menu/Menu';
import { Notify } from 'components/Common/Notify/Notify';

import s from './styles.module.css';

export const AppLayout = ({ children }) => {
  const router = useRouter();
  const sectionTitle = gfApp.getTitle(router.pathname);
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Menu />
      </header>
      <Notify />
      <main className={s.main}>
        <h2
          className={classnames({
            [s.title]: true,
            [s.noTitle]: !sectionTitle,
          })}
        >
          {sectionTitle}
        </h2>
        {children}
      </main>
    </div>
  );
};
