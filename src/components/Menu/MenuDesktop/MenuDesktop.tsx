import { gfMenu } from 'goldfish/gfMenu';
import { UIBuffer } from 'components/UI/UIBuffer/UIBuffer';
import { Logo } from 'components/Logo/Logo';

import { MenuDesktopItem } from './MenuDesktopItem/MenuDesktopItem';
import { UserCabinetLink } from '../UserCabinetLink/UserCabinetLink';

import s from './styles.module.css';

export const MenuDesktop = () => {
  return (
    <div className={s.wrapper}>
      <div className="container flex align-center">
        <Logo />
        <div className={`row ${s.menuDesktop}`}>
          {gfMenu.menu.map(props => (
            <MenuDesktopItem key={props.href} {...props} />
          ))}
        </div>
        <div className="flex justify-end">
          <UserCabinetLink messagesCount={1} />
        </div>
      </div>
      <UIBuffer />
    </div>
  );
};
