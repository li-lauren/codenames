import React from 'react';

import CardDisplay from '../card';
import Hints from '../hints';
import Join from '../join';

const Game = () => {
  // const { currTeam, currRole } = useSelector((state) => state.hintReducer);
  // console.log(currTeam, currRole);

  return (
    <div>
      <div>Codenames</div>
      <Join />
      <Hints />
      <CardDisplay hinterUI={false} />
    </div>
  );
};

export default Game;