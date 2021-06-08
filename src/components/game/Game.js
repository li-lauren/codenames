import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../card';
import Hints from '../hints';

const chunk = (list, n) => {
  const chunkedList = []
  
  let i = 0;
  while (i <= list.length) {
    chunkedList.push(list.slice(i, i + n));
    i = i + n;
  };

  return chunkedList;
}

const Game = () => {
  const n = 3;
  const { cardLayout } = useSelector((state) => state.cardLayoutReducer);

  const cardLayoutRows = chunk(cardLayout, n);

  const cards = cardLayoutRows.map((row, i) => 
    <div key={i}>
      {row.map(card => 
        <Card key={card.id} card={card} />
      )}
    </div>
  );

  return (
    <div>
      <div>Codenames</div>
      <Hints />
      {cards}
    </div>
  )
}

export default Game;