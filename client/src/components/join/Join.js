import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../../WebSocket';
import NameInput from './NameInput';
import RoleBtn from './RoleBtn';

const Join = () => {
  const totalNumPlayers = 4;
  const ws = useContext(WebSocketContext);
  const socketID = ws.socket.id;

  const { selfName, filledRoles } = useSelector(state => state.userReducer);
  const needARole = filledRoles.filter(r => 
    r.selfSocketID === socketID).length === 0;

  const allRolesFilled = filledRoles.length >= totalNumPlayers;

  const roles = ["Hinter", "Guesser"];

  const redRoles = roles.map(
    role => <RoleBtn team={"Red"} role={role} socketID={socketID} />
  );

  const blueRoles = roles.map(
    role => <RoleBtn team={"Blue"} role={role} socketID={socketID} />
  );

  return (
    <div>
      { !selfName ? <NameInput /> : 
       <div>
         { needARole ? <p>Hi {selfName}, choose below: </p> : 
            allRolesFilled ? 
            <button>Begin game</button> : 
            <p>Waiting on the whole team</p>
        }
         
          <div>
            {redRoles}
          </div>
          <div>
            {blueRoles}
          </div>
       </div>
      }
    </div>
  );
};

export default Join;
