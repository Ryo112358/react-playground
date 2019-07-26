import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      die1: 1, 
      die2: 1,
      rolling: false
     }

    this.rollDice = this.rollDice.bind(this);
  }

  rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollDice() {
    this.setState({ rolling: true , die1 : this.rollDie(), die2 : this.rollDie() });

    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die side={this.state.die1} animate={this.state.rolling} />
          <Die side={this.state.die2} animate={this.state.rolling} />
        </div>
        <button onClick={this.rollDice} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll dice!'}</button>
      </div>
    );
  }
}

export default RollDice;