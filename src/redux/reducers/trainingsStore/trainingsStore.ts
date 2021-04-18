import { TrainingsState, TRAININGS_TYPES } from 'types/training';

export const initialState = [];

export const trainingsStore = (
  state: TrainingsState = initialState,
  { type, data }
) => {
  switch (type) {
    case TRAININGS_TYPES.SET_TRAININGS:
      return data;

    default:
      return state;
  }
};
