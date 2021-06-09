import { 
  ADD_HINT, SELECT_HINT, GUESS_HINT, SAVE_HINTS
} from '../types';

const INITIAL_STATE = {
  hints: [], 
  selectedHint: "", 
  currTeam: "red",
  currRole: "hinter"
};

const hintReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_HINT:
      return {
        ...state, 
        hints: payload.newHints, 
        selectedHint: payload.selectedHint, 
        currRole: "guesser"
      };
    case SELECT_HINT:
      return {
        ...state,
        selectedHint: payload.id
      };
    case GUESS_HINT:
      return {
        ...state,
        hints: payload.newHints, 
        currTeam: payload.currTeam,
        currRole: payload.currRole
      };
    case SAVE_HINTS:
      return {
        ...state,
        currTeam: payload.currTeam,
        currRole: "hinter"
      }
    default:
      return state;
  };
};

export default hintReducer;