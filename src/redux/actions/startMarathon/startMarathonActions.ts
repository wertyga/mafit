import { MarathonStart } from 'graphql/types';
import { START_MARATHON_TYPES } from 'types/startMarathon';
import { rootAction } from '../rootAction';

export const setStartMarathonAction = (data: MarathonStart) => {
  const { dispatch } = rootAction();

  dispatch({
    type: START_MARATHON_TYPES.SET_START_MARATHON,
    data,
  });
};

export const updateStartMarathonAction = (data: Partial<MarathonStart>) => {
  const { dispatch } = rootAction();

  dispatch({
    type: START_MARATHON_TYPES.UPDATE_START_MARATHON,
    data,
  });
};
