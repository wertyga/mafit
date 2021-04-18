import { Training } from 'graphql/types';

export enum TRAINING_STATUSES {
  SUCCESS = 'success',
  FAILED = 'failed',
  LOCKED = 'locked',
  ATTENTION = 'attention',
  INPUT = 'input',
}

export enum TRAININGS_TYPES {
  SET_TRAININGS = 'SET_TRAININGS',
}

export type TrainingsState = (Training & { progress?: boolean })[];
