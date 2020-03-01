import React from 'react';
import logo from './TourDeFrance_icon.png';
import './App.css';
import './components/RandomTimer.js'
import RandomTimer from './components/RandomTimer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Tour de France!
        </p>
        <RandomTimer />
      </header>
    </div>
  );
}

export default App;
