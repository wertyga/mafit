import React, { useState } from 'react';
import Link from 'next/link';
import { ArticleItem } from 'components/Article/ArticleItem';
import { UILoader } from 'components/UI/UILoader/UILoader';
import { gfArticle } from 'goldfish/gfArticle';

import { setMessage } from 'redux/actions/notify/notifyActions';
import { useGetArticleQuery, Article } from 'graphql/types';

export const TrainingArticle = ({ trainingId }) => {
  const [state, setState] = useState<Article>({} as Article);

  const { loading } = useGetArticleQuery({
    variables: { trainingId },
    onCompleted: ({ getArticle }) => {
      setState(getArticle as Article);
    },
    onError: ({ message }) => {
      setMessage({ type: 'error', message });
    },
  });

  if (loading) return <UILoader />;
  return (
    <div>
      <ArticleItem
        className="row"
        image={state.image}
        title={state.title}
        description={state.description}
        link={`/articles/${state.id}`}
        preview
      />
    </div>
  );
};
