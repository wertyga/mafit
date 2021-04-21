import { MarathonStart } from 'graphql/types';
import { MARATHON_ITEM_TYPES } from './marathon';

export enum START_MARATHON_TYPES {
  SET_START_MARATHON = 'SET_START_MARATHON',
  UPDATE_START_MARATHON = 'UPDATE_START_MARATHON',
}

export type StartMarathonState = MarathonStart & {
  type: MARATHON_ITEM_TYPES.START;
};
