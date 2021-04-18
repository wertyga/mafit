import React, { useRef, useEffect } from 'react';
import { removeMessage } from 'redux/actions/notify/notifyActions';
import { Notify, NOTIFY_MESSAGE_TYPES } from 'types/notify';

import s from './styles.module.css';

const TYPE_TEXT = {
  [NOTIFY_MESSAGE_TYPES.ERROR]: 'Error',
  [NOTIFY_MESSAGE_TYPES.SUCCESS]: 'Success',
  [NOTIFY_MESSAGE_TYPES.WARNING]: 'Warning',
};

const TIMEOUT = 3000;

export const NotifyItem: React.FC<Notify> = ({ type, message }) => {
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timer.current = setTimeout(() => {
      removeMessage({ type, message });
    }, TIMEOUT);
    return () => {
      clearTimeout(timer.current);
      timer.current = null;
    };
  }, []);

  return (
    <div className={s.notify}>
      <span>{TYPE_TEXT[type]}</span>
      <span>{message}</span>
    </div>
  );
};
