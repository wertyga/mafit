import { MenuDesktop } from './MenuDesktop/MenuDesktop';
import { MobileMenu } from './MobileMenu/MobileMenu';

export const Menu = () => {
  return (
    <div>
      <MenuDesktop />
      <MobileMenu />
    </div>
  );
};
