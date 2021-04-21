import { START_MARATHON_TYPES, StartMarathonState } from 'types/startMarathon';
import { MARATHON_ITEM_TYPES } from 'types/marathon';
import { Activty, Aim, Gender, Training_Statuses } from 'graphql/types';
import {
  bodyDataInitState,
  commonDataInitState,
} from 'components/Marathon/MarathonStart/helpers';

const initialState = {
  status: Training_Statuses.Input,
  files: {
    front: '',
    rear: '',
    right: '',
    left: '',
    video: '',
  },
  pfc: {
    gender: '' as Gender,
    activity: '' as Activty,
    aim: '' as Aim,
  },
  manData: {
    ...bodyDataInitState,
    ...commonDataInitState,
  },
} as StartMarathonState;

export const startMarathonStore = (
  state: StartMarathonState = initialState,
  { type, data }
) => {
  switch (type) {
    case START_MARATHON_TYPES.SET_START_MARATHON:
      return {
        ...data,
        type: MARATHON_ITEM_TYPES.START,
      };

    case START_MARATHON_TYPES.UPDATE_START_MARATHON:
      return {
        ...state,
        ...data,
      };

    default:
      return state;
  }
};
