import { Progress, Marathon_Items_Types } from 'graphql/types';

export enum PROGRESS_TYPES {
  SET_PROGRESS = 'SET_PROGRESS',
  UPDATE_PROGRESS = 'UPDATE_PROGRESS',
}

type ProgressItem = Progress & { type: Marathon_Items_Types.Progress };
export type ProgressState = ProgressItem[];
