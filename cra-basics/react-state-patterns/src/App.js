import React from 'react';
import './App.css';
import UpdateState from './UpdateState';
import MutateState from './MutateState';
// import IconListExercise from './IconListExercise';
import Lottery from './data-flow-exercise/Lottery';
import FlipCoin from './coin-flip-exercise/FlipCoin';
import ColorBoxContainer from './color-boxes-exercise/ColorBoxContainer';

function App() {
  return (
    <div className="App">
      <UpdateState />
      <MutateState />
      {/* <IconListExercise /> */}
      <div className="LotteryContainer">
        <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
      </div>
      <FlipCoin />
      <ColorBoxContainer />
    </div>
  );
}

export default App;
