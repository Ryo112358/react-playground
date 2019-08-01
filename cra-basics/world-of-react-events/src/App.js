import React from 'react';
import './App.css';
import Hangman from './hangman/Hangman';
import LightsOut from './lights-out/Board';

function App() {
  return (
    <div className="App">
      {/* <NumberList /> */}
      {false && <div className="App-hangman"><Hangman /></div>}
      {true && <div className="App-lightsout"><LightsOut /></div>}
    </div>
  );
}

export default App;
