import { React, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { guessHintAction } from '../../redux/actions/hintActions';
import { WebSocketContext } from '../../WebSocket';
import './Card.css'

const Card = ({card}) => {
  const ws = useContext(WebSocketContext);
  const color = card.color;
  const cardId = card.id;
  const [selected, setSelected] = useState(false);
  
  const { hints, selectedHint, currTeam, selectedCards } = useSelector(state => state.hintReducer);
  const dispatch = useDispatch();

  const selectCard = () => {
    const payload = {
      selectedHint, 
      hints, 
      currTeam, 
      newSelectedCards: [...selectedCards, cardId]}
    ws.selectCard(payload);
    // dispatch(guessHintAction(selectedHint, hints, currTeam));
    setSelected(true);
  };

  return (
    <div 
      className={"card " + (selectedCards.includes(cardId) ? color : "")} 
      onClick={selectCard}
    >
      <div>{card.word}</div>
    </div>
  );
};

export default Card;