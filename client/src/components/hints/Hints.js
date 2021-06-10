import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import HintLists from './HintLists';
import HintInput from './HintInput';
import { WebSocketContext } from '../../WebSocket';

export default function Hints() {
  const ws = useContext(WebSocketContext);

  const { currTeam, currRole } = useSelector(state => state.hintReducer);
  
  const saveHints = () => ws.saveHints(currTeam);

  return (
    <div>
      <HintInput />
      <HintLists />
      { currRole === 'guesser' ? 
        <button onClick={saveHints}>Done</button> : ''
      }
    </div>
  );
};
