import { 
  ADD_HINT, SELECT_HINT, GUESS_HINT
} from '../types';

export const addHintAction = (word, count, hints, color) => {
  const id = Math.floor(Math.random() * 100000)
  const newHints = [...hints, {id, word, count, color}];

  return {type: ADD_HINT, payload: { newHints, selectedHint: id }};
};

export const selectHintAction = (id) => {
  return { type: SELECT_HINT, payload: { id }};
};

export const guessHintAction = (id, hints) => {
  console.log(id)
  console.log(hints)
  const usedHint = hints.filter(hint => hint.id == id)[0];
  const newHintCount = usedHint.count - 1;

  const otherHints = hints.filter(hint => hint.id != id);
  
  if (newHintCount == 0) {
    return { type: GUESS_HINT, payload: { newHints: otherHints }};
  } else {
    const updatedHint = {
      ...usedHint,
      count: newHintCount 
    };
    return { 
      type: GUESS_HINT, 
      payload: { newHints: [...otherHints, updatedHint]}
    };
  };
};