import { 
  SET_RED_HINTER, SET_RED_GUESSER,
  SET_BLUE_GUESSER, SET_BLUE_HINTER,
  SET_SELF, SET_USER
} from '../types';

export const setUserAction = (role, userName, socketID, filledRoles) => {
  const user = {
    role, userName, socketID
  };
  return { type: SET_USER, payload: {filledRoles: [...filledRoles, user]}}

  // switch (role) {
  //   case "RedHinter": 
  //     return { type: SET_RED_HINTER, payload: user };
  //   case "RedGuesser":
  //     return { type: SET_RED_GUESSER, payload: user};
  //   case "BlueHinter":
  //     return { type: SET_BLUE_HINTER, payload: user};
  //   case "BlueGuesser":
  //     return { type: SET_BLUE_GUESSER, payload: user};
  // };
};

export const setSelfAction = (selfName, selfSocketID) => {
  return { type: SET_SELF, payload: { selfName, selfSocketID }};
};
