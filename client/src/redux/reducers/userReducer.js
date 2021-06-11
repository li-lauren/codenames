import { 
  SET_RED_HINTER, SET_RED_GUESSER,
  SET_BLUE_GUESSER, SET_BLUE_HINTER, 
  SET_SELF, SET_USER
} from '../types';

const INITIAL_STATE = {
  selfName: '',
  selfSocketID: '',
  // "RedHinter": {}, 
  // "RedGuesser": {},
  // "BlueHinter": {}, 
  // "BlueGuesser": {}
  filledRoles: []
};


const userReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_USER: 
      return {
        ...state, 
        filledRoles: payload.filledRoles
      }
    // case SET_RED_HINTER: 
    //   return { ...state, "RedHinter": payload };
    // case SET_RED_GUESSER:
    //   return { ...state, "RedGuesser": payload };
    // case SET_BLUE_HINTER:
    //   return { ...state, "BlueHinter": payload};
    // case SET_BLUE_GUESSER:
    //   return { ...state, "BlueGuesser": payload};
    case SET_SELF:
      return { 
        ... state, 
        selfName: payload.selfName, 
        selfSocketID: payload.selfSocketID
      }
    default:
      return state;
  };
};

export default userReducer;
