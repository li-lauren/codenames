import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Card.css'

const Card = ({card}) => {
  const color = card.color;
  const [selected, setSelected] = useState(false);
  console.log(card);

  const selectCard = () => {
    setSelected(true);
  }
  return (
    <div 
      className={"card " + (selected ? card.color : "")} 
      onClick={selectCard}
    >
      <div>{card.word}</div>
    </div>
  )
};

export default Card;