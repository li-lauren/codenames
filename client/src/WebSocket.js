import React, { createContext } from 'react';
import io from 'socket.io-client';

import { useDispatch } from 'react-redux';
import { addHintAction, guessHintAction, saveHintsAction, selectHintAction } from './redux/actions/hintActions';

const WebSocketContext = createContext(null);

export { WebSocketContext }

export default({ children }) => {
  let socket;
  let ws;
  const ENDPOINT = 'localhost:8080';

  const dispatch = useDispatch();

  const submitHint = (word, count, allHints, team) => {
    const payload = {
      word, count, allHints, team
    };
    socket.emit("event://submitHint", JSON.stringify(payload));
    dispatch(addHintAction(word, count, allHints, team));
  }

  const selectHint = (id) => {
    socket.emit("event://selectHint", JSON.stringify({id}));
    dispatch(selectHintAction(id));
  };

  const selectCard = (payload) => {
    socket.emit("event://selectCard", 
      JSON.stringify(payload));
    dispatch(guessHintAction(payload));
  };

  const saveHints = (currTeam) => {
    socket.emit("event://saveHints", JSON.stringify({currTeam}));
    dispatch(saveHintsAction(currTeam));
  };


  if (!socket) {
    socket = io.connect(ENDPOINT);

    socket.on('event://getHint', data => {
      const payload = JSON.parse(data);
      const {word, count, allHints, team} = payload;
      dispatch(addHintAction(word, count, allHints, team));
    });

    socket.on('event://getSelectedHint', data => {
      const { id } = JSON.parse(data);
      dispatch(selectHintAction(id));
    });

    socket.on('event://getSelectedCard', data => {
      dispatch(guessHintAction(JSON.parse(data)));
    });

    socket.on('event://getSavedHints', data => {
      const { currTeam } = JSON.parse(data);
      dispatch(saveHintsAction(currTeam));
    });

    ws = {
      socket, 
      submitHint, 
      selectHint,
      selectCard, 
      saveHints
    };
  };

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  )
}