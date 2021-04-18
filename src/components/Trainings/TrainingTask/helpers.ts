import type { ApolloCache } from '@apollo/client';
import {
  GetUserFeedbackDocument,
  SaveFeedbackMutation,
  GetFeedbacksQuery,
  GetFeedbacksDocument,
} from 'graphql/types';
import { QUERY_LIMIT } from '../TrainingFeedbacks/TrainingFeedbacks';

export const updateCacheAfterSave = (
  cache: ApolloCache<SaveFeedbackMutation>,
  data: SaveFeedbackMutation,
  trainingId: string,
  token: string
) => {
  const oldFeedbacks = cache.readQuery<GetFeedbacksQuery>({
    query: GetFeedbacksDocument,
    variables: {
      trainingId,
      limit: QUERY_LIMIT,
      offset: 0,
    },
  });

  if (oldFeedbacks) {
    const { feedbacks = [] } = oldFeedbacks.getFeedbacks || {};
    cache.writeQuery<GetFeedbacksQuery>({
      query: GetFeedbacksDocument,
      variables: {
        trainingId,
        limit: QUERY_LIMIT,
        offset: 0,
      },
      data: {
        getFeedbacks: {
          feedbacks: [data.saveFeedback.feedback, ...feedbacks],
          totalCount: data.saveFeedback.totalCount,
        },
      },
    });
  }

  cache.writeQuery({
    query: GetUserFeedbackDocument,
    variables: {
      trainingId,
      token,
    },
    data: { getUserFeedback: data.saveFeedback },
  });
};
