import { FoodStuff } from 'graphql/types';

export type ProductBasket = {
  title: string;
  type: Omit<FoodStuff, '__typename' | 'title' | 'id' | 'unit'>;
  amount: number;
  unit: string;
  image?: string;
};
