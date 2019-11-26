import React from "react";

const Player1 = ({ score }) => {
  
  return (
    <div style={{ paddingRight: "200px" }}>
      <h1>Player 1</h1>
      <div style={{ textAlign: "center" }}>
        <h1> {score}</h1>
      </div>
    </div>
  );
};

export default Player1;
