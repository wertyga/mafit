import { UserState } from './user';
import { CookieState } from './cookies';
import { MarathonState } from './marathon';
import { NotifyState } from './notify';
import { TrainingsState } from './training';
import { ProgressState } from './progress';
import { StartMarathonState } from './startMarathon';

export type RootState = {
  userStore: UserState;
  cookiesStore: CookieState;
  marathonStore: MarathonState;
  notifyStore: NotifyState;
  trainingsStore: TrainingsState;
  progressStore: ProgressState;
  startMarathonStore: StartMarathonState;
};

export type ClassName = string | Record<string, boolean>;
