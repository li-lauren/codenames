import { React, useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../../WebSocket';
import './Card.css'

const Card = ({card, hinterUI}) => {
  const ws = useContext(WebSocketContext);
  const color = card.color;
  const cardId = card.id;
  
  const { hints, selectedHint, currTeam, selectedCards } = useSelector(state => state.hintReducer);

  const selectCard = () => {
    const payload = {
      selectedHint, 
      hints, 
      currTeam, 
      newSelectedCards: [...selectedCards, cardId]}
    ws.selectCard(payload);
  };

  let cardClass;
  if (hinterUI) {
    cardClass = `card hinter-${color}`
  } else {
    cardClass = "card " + (selectedCards.includes(cardId) ? color : "")
  }
  
  return (
    <div 
      className={cardClass} 
      onClick={selectCard}
    >
      <div>{card.word}</div>
    </div>
  );
};

export default Card;