import React from "react";

const Player2 = ({ score }) => {
  return (
    <div style={{ paddingLeft: "200px" }}>
      <h1>Player 2</h1>
      <div style={{ textAlign: "center" }}>
        <h1> {score}</h1>
      </div>
    </div>
  );
};

export default Player2;
