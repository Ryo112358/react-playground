import React from 'react';
import './App.css';
import Hangman from './hangman-exercise/Hangman';

function App() {
  return (
    <div className="App">
      {/* <NumberList /> */}
      <div className="App-hangman">
        <Hangman />
      </div>
    </div>
  );
}

export default App;
