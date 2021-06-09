import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHintAction, saveHintsAction } from '../../redux/actions/hintActions';
import Hint from './Hint';

export default function Hints() {
  const dispatch = useDispatch();

  const { hints, currTeam } = useSelector(state => state.hintReducer)
  const [hint, setHint] = useState({
    word: '',
    count: ''
  });

  const handleChange = e => {
    setHint({
      ...hint,
      [e.target.name]: e.target.value
    });
  };

  const submitHint = e => {
    e.preventDefault();
    dispatch(addHintAction(hint.word, hint.count, hints, currTeam));
    setHint({
      word: '',
      count: ''
    });
  };

  const saveHints = () => dispatch(saveHintsAction(currTeam));
  

  const hintList = hints?.map(hint => 
    <Hint key={hint.id} hint={hint} />
  ).reverse();

  return (
    <div>
      <form onSubmit={submitHint}>
        ____ Team, it's your turn to guess:
        <input 
          type="text"
          name="word" 
          value={hint.word} 
          onChange={handleChange}
        /> {"for "}
        <input 
          type="text"
          name="count" 
          value={hint.count} 
          onChange={handleChange}
        /> {" words"}
        <input type="submit" value="Submit" />
      </form>
      
      <div>
        {hintList}
      </div>
      <button onClick={saveHints}>Done</button>

    </div>
  );
};
