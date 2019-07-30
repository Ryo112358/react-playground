import React, { Component } from 'react'
import './LotteryBall.css';

class LotteryBall extends Component {
  static defaultProps = {
    value: 0
  }
  
  render() {
    return (
      <li className="LotteryBall">
        {this.props.value}
      </li>
    );
  }
}

export default LotteryBall;