import { Training } from 'graphql/types';

export enum TRAININGS_TYPES {
  SET_TRAININGS = 'SET_TRAININGS',
}

export type TrainingsState = Training[];
