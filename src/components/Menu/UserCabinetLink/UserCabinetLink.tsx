import React, { useState } from 'react';
import { gfMenu } from 'goldfish/gfMenu';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';
import { UIBadge } from 'components/UI/UIBadge/UIBadge';
import { UIModal } from 'components/UI/UIModal/UIModal';

import { UserCabinetMenuItem } from './UserCabinetMenuItem/UserCabinetMenuItem';

import s from './styles.module.css';

type Props = {
  messagesCount?: number;
};

export const UserCabinetLink: React.FC<Props> = ({ messagesCount = 0 }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);

  return (
    <div className={s.wrapper}>
      <div
        role="presentation"
        className={`pointer userCabinetLink ${s.content}`}
        onClick={toggleOpen}
      >
        <UIIcon icon="camera" />
        <UIBadge number={messagesCount} />
      </div>
      <UIModal visible={isOpen} onClose={handleClose} closable side>
        <div>
          {gfMenu.userMenu.map(item => (
            <UserCabinetMenuItem
              key={item.title}
              onClose={handleClose}
              {...item}
            />
          ))}
        </div>
      </UIModal>
    </div>
  );
};
