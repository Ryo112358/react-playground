import React, { Component } from 'react';

class UpdateState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }

    this.singlePunch = this.singlePunch.bind(this);
    this.triplePunch = this.triplePunch.bind(this);
  }

  incrementCounter(curState, incrementBy) {
    if(typeof incrementBy != 'number') incrementBy = 1; // set default increment

    return { score: curState.score + incrementBy }
  }

  singlePunch() {
    this.setState(this.incrementCounter);
  }

  triplePunch() {
    this.setState(st => this.incrementCounter(st, 3));
  }

  render() {
    return (
      <>
        <h2>Hit count is: { this.state.score }</h2>
        <button onClick={this.singlePunch}>One Punch!</button>
        <button onClick={this.triplePunch}>Fury Punch!</button>
      </>
    );
  }
}

export default UpdateState;