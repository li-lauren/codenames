import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAction } from '../../redux/actions/userActions';

const RoleBtn = ({team, role, socketID}) => {
  const dispatch = useDispatch();
  const teamRole = team + role;
  const { 
          selfName, 
          selfSocketID, 
          filledRoles } = useSelector(state => state.userReducer);
  
  const needARole = filledRoles.filter(r => r.selfSocketID === socketID).length === 0;
  const existingUser = filledRoles.filter(r => r.role == teamRole)
  const roleTaken = existingUser.length > 0;
  const setRole = () => {
    if (!roleTaken && needARole) {
      dispatch(setUserAction(teamRole, selfName, selfSocketID, filledRoles ));
    };
  };

  return (
    <div onClick={setRole}>
      {roleTaken ? <p>{existingUser[0].userName}</p> : ''}
      <p>{team}</p>
      <p>{role}</p>
    </div>
  );
};

export default RoleBtn;
