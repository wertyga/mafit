import React from 'react';
import { Menu } from 'components/Menu/Menu';
import { UIBuffer } from 'components/UI/UIBuffer/UIBuffer';
import { Notify } from 'components/Common/Notify/Notify';

import s from './styles.module.css';

export const AppLayout = ({ children }) => (
  <div className={s.wrapper}>
    <div>
      <header>
        <Menu />
      </header>
      <Notify />
      <main>{children}</main>
    </div>
    <footer>
      <UIBuffer mini />
    </footer>
  </div>
);
