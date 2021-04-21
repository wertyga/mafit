import { combineReducers } from 'redux';
import { userStore } from './userStore/userStore';
import { cookiesStore } from './cookiesStore/cookiesStore';
import { marathonStore } from './marathonStore/marathonStore';
import { notifyStore } from './notifyStore/notifyStore';
import { trainingsStore } from './trainingsStore/trainingsStore';
import { progressStore } from './progressStore/progressStore';
import { startMarathonStore } from './startMarathonStore/startMarathonStore';

export const rootReducer = combineReducers({
  userStore,
  cookiesStore,
  marathonStore,
  trainingsStore,
  notifyStore,
  progressStore,
  startMarathonStore,
});
