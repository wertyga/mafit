import React from 'react';
import { FeedbackItem } from 'components/Feedback/FeedbackItem/FeedbackItem';
import { Feedback } from 'graphql/types';

export const TrainingTaskFilled: React.FC<
  Omit<Feedback, 'trainingId'>
> = feedback => {
  return <FeedbackItem isOwn className="row" {...feedback} />;
};
