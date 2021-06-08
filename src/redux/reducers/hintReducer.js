import { 
  ADD_HINT, SELECT_HINT, GUESS_HINT
} from '../types';

const INITIAL_STATE = {
  hints: [], 
  selectedHint: ""
};

const hintReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_HINT:
      return {
        ...state, 
        hints: payload.newHints, 
        selectedHint: payload.selectedHint
      };
    case SELECT_HINT:
      return {
        ...state,
        selectedHint: payload.id
      };
    case GUESS_HINT:
      return {
        ...state,
        hints: payload.newHints
      }
    default:
      return state;
  };
};

export default hintReducer;