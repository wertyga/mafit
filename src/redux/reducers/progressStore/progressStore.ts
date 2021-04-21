import { PROGRESS_TYPES, ProgressState } from 'types/progress';
import { MARATHON_ITEM_TYPES } from 'types/marathon';

const initialState = [];

export const progressStore = (
  state: ProgressState = initialState,
  { type, data }
) => {
  switch (type) {
    case PROGRESS_TYPES.SET_PROGRESS:
      return data.map(item => ({
        ...item,
        type: MARATHON_ITEM_TYPES.PROGRESS,
      }));

    default:
      return state;
  }
};
