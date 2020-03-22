import React, { useReducer } from "react";
import RandomTimer from './RandomTimer.js';
import TimerInput from "./TimerInput.js";
import '../styles/RandomTimer.css';

function GreenJerseyAlarm() {
  const [ timerInput, setTimerInput ] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      minTime: 0,
      maxTime: 0,
    },
  );

  /**
   * Updates state with values from the timer input.
   * @param {Object} e event holding the name and value which corresponds to key-value pair in state.
   */
  const handleTimerInput = e => {
    const { name, value } = e.target;
    setTimerInput({ [name]: value });
  }

  return (
    <div>
      <TimerInput minTime={timerInput.minTime} maxTime={timerInput.maxTime} handleChange={handleTimerInput} />
      <RandomTimer minTime={timerInput.minTime} maxTime={timerInput.maxTime} />
    </div>
  );
}

export default GreenJerseyAlarm;
