import React, { Component } from 'react'

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked1: false, clicked2: false };

    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1(e) { // Function requires manual binding in constructor
    this.setState({ clicked1: !this.state.clicked1 });
  }

  handleClick2 = (e) => { // Function automatically bound with arrow function syntax
    this.setState({ clicked2: !this.state.clicked2 });
  }

  render() {
    return (
      <div>
        <h3>{this.state.clicked1 ? 'Wushu Finger Hold' : 'Tuhe Ankle Twist'}</h3>
        <button onClick={this.handleClick1}>Attack!</button>
        <h3>{this.state.clicked2 ? 'Air bending' : 'Earth bending'}</h3>
        <button onClick={this.handleClick2}>Change style!</button>
      </div>
    );
  }
}

export default BrokenClick;