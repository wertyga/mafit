import { Progress } from 'graphql/types';
import { PROGRESS_TYPES } from 'types/progress';
import { rootAction } from '../rootAction';

export const setProgressAction = (data: Progress[]) => {
  const { dispatch } = rootAction();

  dispatch({
    type: PROGRESS_TYPES.SET_PROGRESS,
    data,
  });
};

export const updateProgressAction = (
  progressId: string,
  progress: Progress
) => {
  const {
    rootState: { progressStore },
    dispatch,
  } = rootAction();

  dispatch({
    type: PROGRESS_TYPES.SET_PROGRESS,
    data: progressStore.map(item => {
      if (progressId) return item.id === progressId ? progress : item;
      return item.trainingId === progress.trainingId ? progress : item;
    }),
  });
};
