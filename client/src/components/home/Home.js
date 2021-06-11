import React, { useState } from 'react';

const Home = () => {
  const possibleCodes = ['blah', 'blahblah', 'blahblahblah'];

  const newCode = possibleCodes[Math.random(0,3)];
  const [showNewCode, setShowNewCode] = useState(false);

  return (
    <div>
      <button onClick={() => setShowNewCode(true)}>
        Start a Game
      </button>
      {showNewCode ?  <p>{newCode}</p> : ""}

      <br/>
      
      <p>Have a game code?</p>
      <input type="text" placeholder="Type it here to join a room" />
      <button>Join</button>
    </div>
  );
};

export default Home;
