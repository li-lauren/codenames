import React from 'react';

import CardDisplay from '../card';
import Hints from '../hints';

const Game = () => {
  // const { currTeam, currRole } = useSelector((state) => state.hintReducer);
  // console.log(currTeam, currRole);

  return (
    <div>
      <div>Codenames</div>
      <Hints />
      <CardDisplay hinterUI={false} />
    </div>
  );
};

export default Game;