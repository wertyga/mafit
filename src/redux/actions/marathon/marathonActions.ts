import { MARATHON_TYPES } from 'types/marathon';
import { Marathon } from 'graphql/types';

import { rootAction } from '../rootAction';

export const setMarathonAction = (data: Omit<Marathon, 'trainings'>) => {
  const { dispatch } = rootAction();
  dispatch({
    type: MARATHON_TYPES.SET_MARATHON,
    data,
  });
};
