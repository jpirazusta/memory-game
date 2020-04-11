import {
  TOTAL_STEPS,
  STEP_ACTION_TYPE,
  NAME_ACTION_TYPE,
  LEVEL_ACTION_TYPE,
} from './constants';

export default function reducer(state, action) {
  switch (action.type) {
    case LEVEL_ACTION_TYPE:
      return {
        ...state,
        level: action.payload,
      };
    case NAME_ACTION_TYPE:
      return {
        ...state,
        name: action.payload,
      };
    case STEP_ACTION_TYPE:
      return {
        ...state,
        step: (state.step + 1) % TOTAL_STEPS,
      };
    default:
      throw new Error();
  }
};
