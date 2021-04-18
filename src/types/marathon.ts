import { Marathon } from 'graphql/types';

export enum MARATHON_TYPES {
  SET_MARATHON = 'SET_MARATHON',
  SET_MARATHON_ERROR = 'SET_MARATHON_ERROR',
}

export type MarathonState = Omit<Marathon, 'trainings'> & { error?: string };
