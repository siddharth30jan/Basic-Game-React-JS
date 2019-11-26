import React, { useState } from "react";
import Player1 from "./components/Player1";
import Player2 from "./components/Player2";
import UpdateScore from "./components/UpdateScore";

const style = {
  display: "flex",
  justifyContent: "center"
};

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [player, setPlayer] = useState(true);
  return (
    <div>
      <div style={style}>
        <Player1 score={score1} />
        <Player2 score={score2} />
      </div>
      <UpdateScore
        player={player}
        setPlayer={setPlayer}
        score1={score1}
        score2={score2}
        setScore1={setScore1}
        setScore2={setScore2}
      />
    </div>
  );
}

export default App;
