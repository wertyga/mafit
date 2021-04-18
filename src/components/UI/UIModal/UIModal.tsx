import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  ReactNode,
  CSSProperties,
} from 'react';
import classnames from 'classnames';
import { gfKeys } from 'goldfish/gfKeys';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';
import useEventListener from 'hooks/useEventListener';
import useClickOutSide from 'hooks/useOnClickOutside';

import s from './styles.module.css';

const CLOSE_TIMEOUT = 100;

export interface UIModalProps {
  visible?: boolean;
  closable?: boolean;
  outerClose?: boolean;
  side?: boolean;
  noOverflow?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  fullHeight?: boolean;
  title?: string | object;
  preset?: 'wide' | 'small' | 'middle';
  onClose: Function;
  modalClassName?: string | object;
  actions?: ReactNode | string;
  children: ReactNode;
}

export const UIModal: React.FC<UIModalProps> = ({
  children,
  visible,
  title,
  closable,
  onClose,
  side,
  actions,
  preset,
  modalClassName,
  disabled,
  outerClose,
  noOverflow,
  style,
  fullHeight,
  ...restProps
}: UIModalProps) => {
  let timer: NodeJS.Timeout;
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  const [selfVisible, setSelfVisible] = useState(false);

  const handleClose = () => {
    if (!visible) return;
    setSelfVisible(false);
    timer = setTimeout(() => {
      onClose();
    }, CLOSE_TIMEOUT);
  };
  const handleOpen = () => {
    setSelfVisible(true);
  };

  const keyClose = useCallback(
    ({ keyCode }) => {
      if (keyCode === gfKeys.escape) {
        handleClose();
      }
    },
    [visible]
  );

  useEffect(
    () => () => {
      clearTimeout(timer);
    },
    []
  );

  useEffect(() => {
    if (visible) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [visible]);

  useEventListener('keyup', keyClose, !!visible);
  useClickOutSide(contentRef, handleClose);

  if (!visible || typeof window === 'undefined') return null;
  return (
    <div className={`UI__modal ${s.modal}`} ref={wrapperRef} {...restProps}>
      <div
        className={classnames('UI__modal__content', preset, modalClassName, {
          [s.content]: true,
          [s.disabled]: disabled,
          [s.sideModal]: side,
          [s.contentVisible]: selfVisible,
          [s.noOverflow]: noOverflow,
          [s.fullHeight]: fullHeight,
        })}
        ref={contentRef}
        style={style}
      >
        {title && <p className={s.title}>{title}</p>}
        {closable && (
          <div className={`UI__modal__close ${s.close}`}>
            <UIIcon icon="close" onClick={handleClose} />
          </div>
        )}
        {children}
        {actions && (
          <div className={`UI__modal-actions ${s.actions}`}>{actions}</div>
        )}
      </div>
    </div>
  );
};
