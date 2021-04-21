import { TRAININGS_TYPES } from 'types/training';
import { MarathonStart, Progress, Training } from 'graphql/types';

import { rootAction } from '../rootAction';

export const setTrainingsAction = (
  data: (Training | Progress | MarathonStart)[]
) => {
  const { dispatch } = rootAction();
  dispatch({
    type: TRAININGS_TYPES.SET_TRAININGS,
    data,
  });
};

export const updateStartMarathon = (startMarathon: MarathonStart) => {
  const {
    rootState: { trainingsStore },
    dispatch,
  } = rootAction();

  const data = [];
};
