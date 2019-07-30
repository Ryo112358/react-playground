import React, { Component } from 'react';
import './Lottery.css';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxNum: 40,
    numBalls: 6
  }
  
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from({length: this.props.numBalls})
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  genRand() {
    return Math.floor(Math.random() * this.props.maxNum) + 1;
  }

  genNewNumbers() {
    let nums = [];
    for(let i=0; i<this.props.numBalls; ++i) {
      nums.push(this.genRand());
    }
    this.setState({ numbers: nums });
  }

  // Convention to have methods called handle* e.g. handleClick, handleDrag, etc. which call a functional method
  handleClick() {
    this.genNewNumbers();
  }

  render() {
    return (
      <div className="Lottery">
        <h3>{this.props.title}</h3>
        <ul className="Lottery-balls">
          {this.state.numbers.map((num, index) => <LotteryBall value={num} key={index+1} />)}
        </ul>
        <button onClick={this.handleClick} className="Lottery-button">Generate!</button>
      </div>
    );
  }
}

export default Lottery;