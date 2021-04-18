import React, { useState, useEffect } from 'react';
import { Logo } from 'components/Logo/Logo';
import { UserCabinetLink } from 'components/Menu/UserCabinetLink/UserCabinetLink';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';
import { MobileMenuContent } from './MobileMenuContent/MobileMenuContent';

import s from './styles.module.css';

export const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }, [isOpen]);

  const icon = isOpen ? 'close' : 'burger';
  return (
    <div className={s.container}>
      <div className={s.menuWrapper}>
        <UIIcon icon={icon} onClick={toggleOpen} />
        <Logo />
        <div className={s.userCabinetLink}>
          <UserCabinetLink messagesCount={1} />
        </div>
      </div>
      <MobileMenuContent visible={isOpen} onClose={handleClose} />
    </div>
  );
};
