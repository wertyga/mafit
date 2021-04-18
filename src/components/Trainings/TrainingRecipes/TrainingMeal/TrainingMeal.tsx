import React from 'react';
import { Meal } from 'graphql/types';

import { TrainingRecipe } from '../TrainingRecipe/TrainingRecipe';

export const TrainingMeal: React.FC<Meal> = ({ recipes, type }) => {
  return (
    <div className="row flex-column">
      {recipes.map(recipe => (
        <TrainingRecipe key={recipe.id} {...recipe} mealType={type} />
      ))}
    </div>
  );
};
