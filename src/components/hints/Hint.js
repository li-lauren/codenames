import React from 'react'
import { useDispatch } from 'react-redux';
import { selectHintAction } from '../../redux/actions/hintActions';

export default function Hint({hint}) {
  const dispatch = useDispatch();
  const selectHint = id => dispatch(selectHintAction(id));
  
  return (
    <div onClick={() => selectHint(hint.id)}>
      {hint.word} -- {hint.count}
    </div>
  )
}
