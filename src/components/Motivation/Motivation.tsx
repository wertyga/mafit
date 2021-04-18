import React, { useState } from 'react';
import { ArticleItem } from 'components/Article/ArticleItem';
import { UILoader } from 'components/UI/UILoader/UILoader';

import { setMessage } from 'redux/actions/notify/notifyActions';
import {
  useGetMotivationQuery,
  Motivation as MotivationType,
} from 'graphql/types';

export const Motivation = ({ trainingId, className, preview }) => {
  const [state, setState] = useState<MotivationType>({} as MotivationType);
  const { loading } = useGetMotivationQuery({
    variables: {
      trainingId,
    },
    onCompleted: ({ getMotivation }) => {
      setState((getMotivation || {}) as MotivationType);
    },
    onError: ({ message }) => {
      setMessage({ type: 'error', message });
    },
  });

  if (loading) return <UILoader />;
  return (
    <ArticleItem
      className={className}
      image={state.image}
      title={state.title}
      description={state.description}
      preview
    />
  );
};
