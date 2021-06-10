import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const chunk = (list, n) => {
  const chunkedList = []
  
  let i = 0;
  while (i <= list.length) {
    chunkedList.push(list.slice(i, i + n));
    i = i + n;
  };

  return chunkedList;
};

function CardDisplay({hinterUI}) {
  const n = 3;

  const { cardLayout } = useSelector((state) => state.cardLayoutReducer);

  const cardLayoutRows = chunk(cardLayout, n);

  const cards = cardLayoutRows.map((row, i) => 
    <div key={i}>
      {row.map(card => 
        <Card key={card.id} card={card} hinterUI={hinterUI} />
      )}
    </div>
  );

  return (
    <div>
      {cards}
    </div>
  );
};

export default CardDisplay
