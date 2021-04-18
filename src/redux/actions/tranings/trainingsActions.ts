import { TRAININGS_TYPES } from 'types/training';
import { Training } from 'graphql/types';

import { rootAction } from '../rootAction';

export const setTrainingsAction = (data: Training[]) => {
  const { dispatch } = rootAction();
  dispatch({
    type: TRAININGS_TYPES.SET_TRAININGS,
    data,
  });
};
