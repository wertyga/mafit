import { UserState } from './user';
import { CookieState } from './cookies';
import { MarathonState } from './marathon';
import { NotifyState } from './notify';
import { TrainingsState } from './training';

export type RootState = {
  userStore: UserState;
  cookiesStore: CookieState;
  marathonStore: MarathonState;
  notifyStore: NotifyState;
  trainingsStore: TrainingsState;
};

export type ClassName = string | Record<string, boolean>;
