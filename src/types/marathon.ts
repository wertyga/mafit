import { Marathon } from 'graphql/types';

export enum MARATHON_TYPES {
  SET_MARATHON = 'SET_MARATHON',
  SET_MARATHON_ERROR = 'SET_MARATHON_ERROR',
}

export enum MARATHON_ITEM_TYPES {
  PROGRESS = 'PROGRESS',
  START = 'START',
  BASKET = 'BASKET',
}

export type MarathonState = Omit<Marathon, 'trainings'> & { error?: string };
