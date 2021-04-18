import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { gfMenu } from 'goldfish/gfMenu';

import { MobileMenuItem } from '../MobileMenuItem/MobileMenuItem';

import s from './styles.module.css';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const OPEN_TIMOUT = 100;

export const MobileMenuContent: React.FC<Props> = ({ visible, onClose }) => {
  const router = useRouter();
  const wrapperRef = useRef();

  useEffect(() => {}, [visible]);

  return (
    <div className={s.wrapper} ref={wrapperRef}>
      <div
        className={classnames({
          [s.content]: true,
          [s.visible]: visible,
        })}
      >
        {gfMenu.menu.map(item => (
          <MobileMenuItem
            key={item.title}
            {...item}
            onClose={onClose}
            isActiveLink={item.isActive(router.pathname)}
          />
        ))}
      </div>
    </div>
  );
};
