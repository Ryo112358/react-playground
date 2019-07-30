import React, { Component } from 'react';
import './FlipCoin.css';
import Coin from './Coin';
import { genRandBool } from './helpers';

class FlipCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numFlips: 0,
      numHeads: 0,
      sideHeads: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  updateCoinSide(curState, side) {

    return { sideHeads: side};
  }

  incrementCounters(curState) {
    return { 
      numFlips: curState.numFlips + 1,
      numHeads: curState.numHeads + (curState.sideHeads ? 1 : 0)
    };
  }

  flipCoin() {
    let side = genRandBool();
    this.setState(st => this.updateCoinSide(st, side));
    this.setState(this.incrementCounters);
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="FlipCoin">
        <h2>Coin Flip Game</h2>
        {this.state.sideHeads != null && <Coin sideHeads={this.state.sideHeads} />}
        <button onClick={this.handleClick}>Flip</button>
        <p>Out of {this.state.numFlips}, there have been {this.state.numHeads} heads and {this.state.numFlips-this.state.numHeads} tails.</p>
      </div>
    );
  }
}

export default FlipCoin;