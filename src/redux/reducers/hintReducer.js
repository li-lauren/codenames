import { ADD_HINT } from '../types';

const INITIAL_STATE = {
  hints: []
};

const hintReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_HINT:
      return {
        ...state, 
        hints: payload.newHints
      };

    default:
      return state;
  };
};

export default hintReducer;