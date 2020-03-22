import React from 'react';
import logo from './TourDeFrance_icon.png';
import './App.css';
import GreenJerseyAlarm from './components/GreenJerseyAlarm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Welcome to the Tour de France!
        </h3>
        <p>Fill in a minimum and maximum time in minutes and start the timer!</p>
        <GreenJerseyAlarm />
      </header>
    </div>
  );
}

export default App;
