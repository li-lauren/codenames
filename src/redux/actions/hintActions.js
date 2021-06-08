import { ADD_HINT } from '../types';

export const addHintAction = (word, count, hints) => {
  const newHints = [...hints, {word, count}];

  return { type: ADD_HINT, payload: { newHints }};
};