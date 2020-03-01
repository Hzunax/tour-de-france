import React from "react";

function RandomTimer() {
  let ringtone = new Audio("/rodania.mp3");

  const startTimer = () => {
    setTimeout(() => {
      console.log('going to play');
      ringtone.play();
      console.log('playing');
    }, Math.floor(Math.random() * 5000));
  }

  return (
    <div>
      <button onClick={startTimer}>Start timer</button>
    </div>
  );
}

export default RandomTimer;
