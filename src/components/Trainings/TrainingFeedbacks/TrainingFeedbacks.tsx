import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { gfFeedback } from 'goldfish/gfFeedback';
import { FeedbackItem } from 'components/Feedback/FeedbackItem/FeedbackItem';
import { UILoader } from 'components/UI/UILoader/UILoader';

import { setMessage } from 'redux/actions/notify/notifyActions';
import { useGetFeedbacksLazyQuery, Feedback } from 'graphql/types';

export const QUERY_LIMIT = 3;

type StateType = {
  feedbacks: Feedback[];
  totalCount: number;
  offset: number;
};

export const TrainingFeedbacks = ({ trainingId }) => {
  const [state, setState] = useState<StateType>({
    feedbacks: [],
    totalCount: 0,
    offset: 0,
  });
  const [fetchFeedbacks, { loading }] = useGetFeedbacksLazyQuery({
    onCompleted: ({ getFeedbacks }) => {
      const { feedbacks = [], totalCount = 0 } = getFeedbacks || {};
      const offset = state.offset + QUERY_LIMIT;
      setState(prev => ({
        ...prev,
        feedbacks: [...prev.feedbacks, ...feedbacks],
        totalCount,
        offset,
      }));
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });

  const handleFetchFeedbacks = () => {
    fetchFeedbacks({
      variables: {
        trainingId,
        limit: QUERY_LIMIT,
        offset: state.offset,
      },
    });
  };

  const isMaxFetched = state.offset >= state.totalCount;
  const fetchMore = () => {
    if (isMaxFetched) return;
    handleFetchFeedbacks();
  };

  useEffect(() => {
    if (state.feedbacks.length > 0) return;
    handleFetchFeedbacks();
  }, []);

  if (state.feedbacks.length < 1 && loading) return <UILoader />;
  return (
    <div
      className={classnames('row', {
        pending: loading,
      })}
    >
      {state.feedbacks.map(item => (
        <FeedbackItem key={item.id} {...item} />
      ))}
      <div role="presentation" onClick={fetchMore} className="link mt-6">
        {isMaxFetched
          ? gfFeedback.totalText(state.totalCount)
          : gfFeedback.showMoreText(
              QUERY_LIMIT,
              state.totalCount,
              state.offset
            )}
      </div>
    </div>
  );
};
