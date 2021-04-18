import React, { useState, useMemo } from 'react';
import { gfTraining } from 'goldfish/gfTraining';
import { UIVideo } from 'components/UI/UIVideo/UIVideo';
import { UIListItem } from 'components/UI/UIListItem/UIListItem';
import { Motivation } from 'components/Motivation/Motivation';
import { ArticleItem } from 'components/Article/ArticleItem';
import { Training } from 'graphql/types';

import { TrainingItemMenu } from '../TrainingItemMenu/TrainingItemMenu';
import { TrainingTask } from '../TrainingTask/TrainingTask';
import { TrainingRecipes } from '../TrainingRecipes/TrainingRecipes';
import { TrainingFeedbacks } from '../TrainingFeedbacks/TrainingFeedbacks';
import { TrainingArticle } from '../TrainingArticle/TrainingArticle';

export const TrainingListItem: React.FC<Training> = trainingProps => {
  const { title, description, date, status, video, dayFood } = trainingProps;
  const [state, setState] = useState({
    tab: gfTraining.menu[0],
  });

  const handleChangeTab = (tab: string) => () => {
    setState(prev => ({ ...prev, tab }));
  };

  const TabElement = useMemo(() => {
    switch (state.tab) {
      case gfTraining.menu[0]:
        return (
          <TrainingTask
            trainingId={trainingProps.id}
            handleChangeTab={handleChangeTab}
          />
        );
      case gfTraining.menu[1]:
        return <TrainingRecipes dayFoodId={dayFood.id} />;
      case gfTraining.menu[2]:
        return <TrainingFeedbacks trainingId={trainingProps.id} />;
      case gfTraining.menu[3]:
        return (
          <Motivation trainingId={trainingProps.id} className="row" preview />
        );
      case gfTraining.menu[4]:
        return <TrainingArticle trainingId={trainingProps.id} />;

      default:
        return null;
    }
  }, [state.tab]);

  return (
    <UIListItem
      title={title}
      description={description}
      date={date}
      status={gfTraining.status[status]}
      scrollOpen
    >
      <div className="row mb-9">{!!video && <UIVideo src={video} />}</div>
      <div>
        <TrainingItemMenu
          chosenTab={state.tab}
          onChange={handleChangeTab}
          className="mb-6"
        />
        {TabElement}
      </div>
    </UIListItem>
  );
};
