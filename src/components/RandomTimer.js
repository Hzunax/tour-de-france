import React, { useState } from "react";
import { Button, IconButton, TextField } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";
import './styles/RandomTimer.css';

const ringtone = new Audio("/rodania.mp3");
let timerId;

function RandomTimer() {
  const [minTime, setMinTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const startTimer = () => {
    const randomTime = Math.floor(
      Math.random() * Math.abs(maxTime - minTime) * 1000 * 60
    );

    timerId = setTimeout(() => {
      ringtone.play();
      setIsMusicPlaying(true);
    }, minTime * 1000 * 60 + randomTime);
    setTimerStarted(true);
  };

  const cancelTimer = () => {
    clearTimeout(timerId);
    setTimerStarted(false);
  }

  const stopMusic = () => {
    ringtone.pause();
    ringtone.currentTime = 0;
    cancelTimer();
    setIsMusicPlaying(false);
  }

  return (
    <div id="timer-container">
      <div id="text-container">
        <TextField
          id="min-time"
          className="timeInput"
          label="Minimum"
          variant="outlined"
          type="number"
          value={minTime}
          onChange={event => setMinTime(event.target.value)}
          required
        />
        <TextField
          id="max-time"
          className="timeInput"
          label="Maximum"
          variant="outlined"
          type="number"
          value={maxTime}
          onChange={event => setMaxTime(event.target.value)}
          required
        />
      </div>

      <Button id="start-button" variant="contained" color="primary" onClick={startTimer}>
        Start timer
      </Button>
      <Button id="cancel-button" variant="contained" disabled={!timerStarted} color="secondary" onClick={cancelTimer}>
        Cancel timer
      </Button>
      <IconButton id="stop-button" aria-label="stop" disabled={!isMusicPlaying} color="secondary" onClick={stopMusic}>
        <StopIcon />
      </IconButton>
    </div>
  );
}

export default RandomTimer;
