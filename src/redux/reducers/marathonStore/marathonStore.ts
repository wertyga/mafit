import { MARATHON_TYPES, MarathonState } from 'types/marathon';

export const initialState = ({
  error: '',
} as unknown) as MarathonState;

export const marathonStore = (
  state: MarathonState = initialState,
  { type, data }
) => {
  switch (type) {
    case MARATHON_TYPES.SET_MARATHON:
      return data;

    case MARATHON_TYPES.SET_MARATHON_ERROR:
      return {
        ...state,
        error: data.error,
      };

    default:
      return state;
  }
};
