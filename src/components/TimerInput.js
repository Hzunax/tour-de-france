import React from "react";
import { TextField } from "@material-ui/core";

function TimerInput(props) {
  return (
    <div id="text-container">
      <TextField
        id="min-time"
        name="minTime"
        className="timeInput"
        label="Minimum"
        variant="outlined"
        type="number"
        onChange={props.handleChange}
        required
      />
      <TextField
        id="max-time"
        name="maxTime"
        className="timeInput"
        label="Maximum"
        variant="outlined"
        type="number"
        onChange={props.handleChange}
        required
      />
    </div>
  );
}

export default TimerInput;
