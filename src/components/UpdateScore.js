import React, { useState } from "react";

const UpdateScore = ({
  player,
  score1,
  score2,
  setScore1,
  setScore2,
  setPlayer
}) => {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const [dice, setDice] = useState(0);
  const playerChange = async () => {
    await setNo1(0);
    await setNo2(0);
    await setDice(0);
    await setPlayer(!player);
  };

  const handleChange = async () => {
    console.log("hit");
    console.log({ dice: dice, no1: no1, no2: no2 });
    let X = await (Math.floor(Math.random() * 6)) + 1;
    await setDice(X);
    if (dice === 1) await playerChange();
    else {
      if (player) await setNo1(no1 + dice);
      else await setNo2(no2 + dice);
    }
    console.log({ dice: dice, no1: no1, no2: no2 });
  };
  const handleChange1 = () => {
    if (player) setScore1(score1 + no1);
    else setScore2(score2 + no2);

    playerChange();
  };
  return (
    <div
      style={{
        marginTop: "200px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          border: "5px solid red",
          borderRadius: "25px",
          width: "200px"
        }}
      >
        <p style={{ textAlign: "center" }}>
          <strong>CURRENT</strong>
        </p>
        <div style={{ textAlign: "center" }}>{no1}</div>
      </div>
      <div style={{ padding: "10px" }}>
        <button
          style={{
            border: "none",
            color: "blue",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px"
          }}
          onClick={e => {
            handleChange();
          }}
        >
          ROLL DICE
        </button>
        <br />
        <h1>{dice}</h1>
        <button
          style={{
            border: "none",
            color: "black",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px"
          }}
          onClick={e => handleChange1()}
        >
          HOLD
        </button>
      </div>
      <div
        style={{
          border: "5px solid red",
          borderRadius: "25px",
          width: "200px"
        }}
      >
        <p style={{ textAlign: "center" }}>
          <strong>CURRENT</strong>
        </p>
        <div style={{ textAlign: "center" }}>{no2}</div>
      </div>
    </div>
  );
};

export default UpdateScore;
