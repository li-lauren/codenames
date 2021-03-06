import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../../WebSocket';

export default function HintInput() {
  const ws = useContext(WebSocketContext);
  // const dispatch = useDispatch();
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
    ws.submitHint(hint.word, hint.count, hints, currTeam);
    // dispatch(addHintAction(hint.word, hint.count, hints, currTeam));
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
