import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { guessHintAction } from '../../redux/actions/hintActions';
import './Card.css'

const Card = ({card}) => {
  const color = card.color;
  const [selected, setSelected] = useState(false);
  
  const { hints, selectedHint } = useSelector(state => state.hintReducer);
  const dispatch = useDispatch();

  const selectCard = () => {
    dispatch(guessHintAction(selectedHint, hints));
    setSelected(true);
  };

  return (
    <div 
      className={"card " + (selected ? color : "")} 
      onClick={selectCard}
    >
      <div>{card.word}</div>
    </div>
  )
};

export default Card;