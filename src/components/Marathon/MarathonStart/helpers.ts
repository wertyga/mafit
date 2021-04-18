import { gfMarathon } from 'goldfish/gfMarathon';

export const bodyDataInitState = Object.keys(
  gfMarathon.manData.bodyData
).reduce(
  (acc, key) => ({
    ...acc,
    [key]: '',
  }),
  {}
);
export const commonDataInitState = Object.keys(
  gfMarathon.manData.commonData
).reduce(
  (acc, key) => ({
    ...acc,
    [key]: '',
  }),
  {}
);
