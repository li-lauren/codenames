import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHintAction } from '../../redux/actions/hintActions';

export default function HintInput() {
  const dispatch = useDispatch();
  const { hints, currTeam } = useSelector(state => state.hintReducer);

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

  return (
    <div>
      <form onSubmit={submitHint}>
        {currTeam} Team, it's your turn to guess:
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
    </div>
  );
};
