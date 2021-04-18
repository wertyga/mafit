import React, { useState } from 'react';
import { setMessage } from 'redux/actions/notify/notifyActions';
import { useGetDayFoodQuery, Meal } from 'graphql/types';
import { UILoader } from 'components/UI/UILoader/UILoader';

import { TrainingMeal } from './TrainingMeal/TrainingMeal';

// MOCK
const ID = 'ddasdasd';

type State = {
  dayFood: Meal[];
  error: string;
};
export const TrainingRecipes = ({ dayFoodId }) => {
  const [state, setState] = useState<State>({
    dayFood: [],
    error: '',
  });
  const { loading } = useGetDayFoodQuery({
    fetchPolicy: 'network-only',
    variables: { dayFoodId },
    onCompleted: ({ dayFood = [] }) => {
      setState(prev => ({ ...prev, dayFood } as State));
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });

  return (
    <div style={{ minHeight: '100vh' }}>
      {loading && <UILoader />}
      {state.dayFood.map(meal => (
        <TrainingMeal key={meal.id} {...meal} />
      ))}
    </div>
  );
};
