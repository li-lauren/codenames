import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHintAction } from '../../redux/actions/hintActions';

export default function Hints() {
  const dispatch = useDispatch();

  const { hints } = useSelector(state => state.hintReducer)
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
    dispatch(addHintAction(hint.word, hint.count, hints));
    setHint({
      word: '',
      count: ''
    });
  };

  const hintsList = hints?.map((hint, i) => 
    <div key={i}>
      {hint.word} -- {hint.count}
    </div>
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
        {hintsList}
      </div>
    </div>
  );
};
