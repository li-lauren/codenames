import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketContext } from '../../WebSocket';
import { setSelfAction } from '../../redux/actions/userActions';

const NameInput = () => {
  const ws = useContext(WebSocketContext);
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();

  const submitName = () => {
    dispatch(setSelfAction(name, ws.socket.id));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={name} />
      <button onClick={submitName}>Go!</button>
    </div>
  );
};

export default NameInput;
