import { bodyDataInitState } from '../MarathonStart/helpers';

export const getInitialBodyState = () =>
  Object.keys(bodyDataInitState).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        after: '',
        before: '',
      },
    }),
    {}
  );
