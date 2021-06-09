import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveHintsAction } from '../../redux/actions/hintActions';
import HintLists from './HintLists';
import HintInput from './HintInput';

export default function Hints() {
  const dispatch = useDispatch();

  const { currTeam, currRole } = useSelector(state => state.hintReducer);
  
  const saveHints = () => dispatch(saveHintsAction(currTeam));

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
