import React, { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const ringtone = new Audio("/rodania.mp3");
let timerId; // Holds the id of the timeout, in order to clean up.

function RandomTimer({ minTime, maxTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  /**
   * Calculates a random value within the given interval.
   * If min > max, it will take min as max value, by calculating the absolute value of the
   * difference.
   * Returns the random value in miliseconds.
   * @param {Number} minTime Left side of interval
   * @param {Number} maxTime Right side of interval
   */
  const calculateRandomTimeInMinutes = (minTime, maxTime) => {
    return Math.floor(Math.random() * Math.abs(maxTime - minTime) * 1000 * 60);
  }

  /**
   * Start a timer that will play the ringtone after a random amount of time,
   * within the given interval.
   */
  const startTimer = () => {
    const randomTimeInMinutes = calculateRandomTimeInMinutes(minTime, maxTime);
    timerId = setTimeout(() => {
      ringtone.play();
      setIsMusicPlaying(true);
    }, minTime * 1000 * 60 + randomTimeInMinutes);
    setTimerStarted(true);
  };

  /**
   * Stops the timer.
   */
  const cancelTimer = () => {
    clearTimeout(timerId);
    setTimerStarted(false);
  }

  /**
   * Stops the music and cleans up the timer.
   */
  const stopMusic = () => {
    ringtone.pause();
    ringtone.currentTime = 0;
    cancelTimer();
    setIsMusicPlaying(false);
  }

  return (
    <div id="timer-container">
      {!timerStarted
        ? <Button id="start-button" variant="contained" color="primary" onClick={startTimer} endIcon={<PlayArrowRoundedIcon />}>Start timer</Button>
        : <Button id="cancel-button" variant="contained" color="secondary" onClick={cancelTimer} disabled={isMusicPlaying} endIcon={<CancelRoundedIcon />}>Cancel timer</Button>
      }
      <IconButton id="stop-button" aria-label="stop" disabled={!isMusicPlaying} color="secondary" onClick={stopMusic}>
        <StopIcon />
      </IconButton>
    </div>
  );
}

export default RandomTimer;
