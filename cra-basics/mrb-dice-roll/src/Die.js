import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numAsText : {
      1 : 'one',
      2 : 'two',
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six'
    },
    side : 6
  }
  
  generateStyleClass() {
    return "fas fa-dice-" + this.props.numAsText[this.props.side];
  }

  render() {
    return (
      <i className={`Die ${this.generateStyleClass()} ${this.props.animate && 'Die-animate'}`}></i>
    );
    // String interpolation used above
  }
}

export default Die;