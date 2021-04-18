import { Notify, NOTIFY_TYPES, NotifyState } from 'types/notify';

const initialState = [];

export const notifyStore = (
  state: NotifyState = initialState,
  { type, data }: { type: NOTIFY_TYPES; data: Notify }
) => {
  switch (type) {
    case NOTIFY_TYPES.NOTIFY:
      return [data, ...state];

    case NOTIFY_TYPES.REMOVE_NOTIFY:
      return state.filter(item => item.message !== data.message);

    default:
      return state;
  }
};
