import { setTrainingsAction } from '../tranings/trainingsActions';

import { MARATHON_TYPES } from 'types/marathon';
import { GetMarathonDocument, Marathon } from 'graphql/types';

import { rootAction } from '../rootAction';

export const setMarathonAction = (data: Omit<Marathon, 'trainings'>) => {
  const { dispatch } = rootAction();
  dispatch({
    type: MARATHON_TYPES.SET_MARATHON,
    data,
  });
};

export const getMarathonAction = async (id: string) => {
  const {
    dispatch,
    rootState: { marathonStore },
    apolloQuery,
  } = rootAction();
  if (marathonStore.id === id) return {};

  try {
    const {
      data: { trainings, ...marathon },
    } = await apolloQuery({
      query: GetMarathonDocument,
      variables: { id },
    });

    dispatch({
      type: MARATHON_TYPES.SET_MARATHON,
      data: marathon,
    });
    setTrainingsAction(trainings);

    return marathon;
  } catch (e) {
    const error = e.message;
    if (typeof window !== 'undefined') {
      dispatch({
        type: MARATHON_TYPES.SET_MARATHON_ERROR,
        data: { error },
      });
    } else {
      return { error };
    }
  }
};
