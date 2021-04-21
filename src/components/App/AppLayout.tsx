import React from 'react';
import { Menu } from 'components/Menu/Menu';
import { Notify } from 'components/Common/Notify/Notify';
import { UIBuffer } from 'components/UI/UIBuffer/UIBuffer';

import s from './styles.module.css';

export const AppLayout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Menu />
      </header>
      <Notify />
      <main className={s.main}>{children}</main>
      <footer>
        <UIBuffer mini />
      </footer>
    </div>
  );
};
