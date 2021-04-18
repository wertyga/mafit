import React, { useState, useRef, useEffect } from 'react';
import _noop from 'lodash/noop';
import classnames, { Mapping } from 'classnames';
import { getDateMonth } from 'utils/date';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';

import s from './styles.module.css';

type Props = {
  date?: string;
  title: string;
  description?: string;
  status?: any;
  className?: Mapping;
  onOpen?: (o?: boolean) => void;
  scrollOpen?: boolean;
  locked?: boolean;
};

export const UIListItem: React.FC<Props> = ({
  date,
  title,
  description,
  status,
  className,
  children,
  onOpen = _noop,
  scrollOpen,
  locked,
}) => {
  const wrapperRef = useRef();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    if (!children || locked) return;
    setOpen(!isOpen);
    onOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    if (scrollOpen && wrapperRef.current) {
      setTimeout(() => {
        (wrapperRef.current as HTMLDivElement).scrollIntoView({
          behavior: 'smooth',
        });
      }, 1);
    }
  }, [isOpen]);

  return (
    <div className={s.wrapper} ref={wrapperRef}>
      <div className={classnames({ [s.isOpen]: isOpen })}>
        <div className={`container ${s.headContent}`}>
          <div
            className={classnames(className, 'row', {
              [s.lisItem]: true,
              [s.opened]: isOpen,
              pointer: !!children,
            })}
            role="presentation"
            onClick={toggleOpen}
          >
            <div className="flex-column">
              {!!date && <div className={s.date}>{getDateMonth(date)}</div>}
              <div className={s.title}>{title}</div>
              <div className={s.description}>{description}</div>
            </div>
            <div className={s.status}>{status}</div>
            <UIIcon icon="close" className={s.closeMobileIcon} />
          </div>
          {isOpen && <UIIcon icon="closeCircle" className={s.closeIconDesk} />}
        </div>
      </div>
      {isOpen && <div className="container pt-4 pb-8">{children}</div>}
    </div>
  );
};
