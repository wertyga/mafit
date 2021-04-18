import { Notify, NOTIFY_TYPES } from 'types/notify';
import { rootAction } from '../rootAction';

export const setMessage = (message: Notify) => {
  const { dispatch } = rootAction();

  dispatch({
    type: NOTIFY_TYPES.NOTIFY,
    data: message,
  });
};

export const removeMessage = (message: Notify) => {
  const { dispatch } = rootAction();

  dispatch({
    type: NOTIFY_TYPES.REMOVE_NOTIFY,
    data: message,
  });
};
