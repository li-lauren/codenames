import React, { useContext } from 'react';
import { WebSocketContext } from '../../WebSocket';

export default function Hint({hint}) {
  const ws = useContext(WebSocketContext);

  const selectHint = id => ws.selectHint(id);
  
  return (
    <div onClick={() => selectHint(hint.id)}>
      {hint.word} -- {hint.count}
    </div>
  );
};
