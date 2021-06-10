import React from 'react';
import { useSelector } from 'react-redux';
import Hint from './Hint';

export default function HintLists() {
  const { hints } = useSelector(state => state.hintReducer);

  const getHintsByColor = color => {
    return hints?.filter(h => h.team === color).map(
      hint => <Hint key={hint.id} hint={hint} />
    ).reverse();
  };

  const redHints = getHintsByColor('red');
  const blueHints = getHintsByColor('blue');

  return (
    <div>
      Red
      {redHints}
      Blue
      {blueHints}
    </div>
  );
};
