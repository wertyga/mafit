import { gfMarathon } from 'goldfish/gfMarathon';

export const collectManDataKeys = () => [
  ...Object.keys(gfMarathon.manData.commonData),
  ...Object.keys(gfMarathon.manData.bodyData),
];
