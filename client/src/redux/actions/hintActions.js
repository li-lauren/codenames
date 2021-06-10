import { 
  ADD_HINT, SELECT_HINT, GUESS_HINT, SAVE_HINTS
} from '../types';

export const addHintAction = (word, count, hints, team) => {
  const id = Math.floor(Math.random() * 100000)
  const newHints = [...hints, {id, word, count, team}];

  return {type: ADD_HINT, payload: { newHints, selectedHint: id }};
};

export const selectHintAction = (id) => {
  return { type: SELECT_HINT, payload: { id }};
};

const getHintById = (id, hints) => {
  return hints.filter(hint => hint.id === id)[0];
};

const updateHints = (id, hints) => {
  const usedHint = getHintById(id, hints);
  const newHintCount = usedHint.count - 1;

  const otherHints = hints.filter(hint => hint.id !== id);
  
  if (newHintCount === 0) {
    return otherHints;
  } else {
    return [...otherHints, {...usedHint, count: newHintCount}];
  };
};

const checkTeamStatus = (currTeam, hints) => {
  const availableHints = hints.filter(hint => hint.team === currTeam);

  return availableHints.length === 0;
}

export const guessHintAction = (data) => {
  const {selectedHint, hints, currTeam, newSelectedCards} = data;
  const newHints = updateHints(selectedHint, hints);
  const switchTeam = checkTeamStatus(currTeam, newHints);
 
  if (switchTeam) {
    return {
      type: GUESS_HINT, 
      payload: { 
        newHints,
        currTeam: currTeam === "red" ? "blue" : "red", 
        currRole: "hinter", 
        newSelectedCards
      }
    };
  } else {
    return { 
      type: GUESS_HINT, 
      payload: { 
        newHints, 
        currTeam,
        currRole: "guesser", 
        newSelectedCards
      } 
    };
  };
};

export const saveHintsAction = (currTeam) => {
  const newTeam = currTeam === "red" ? "blue" : "red";
  return { type: SAVE_HINTS, payload: {currTeam: newTeam} };
};