import React, { Component } from 'react';
import './ColorBoxContainer.css';
import ColorBox from './ColorBox';

class ColorBoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18
  }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(
      () => <ColorBox />
    )
    return (
      <div className="ColorBoxContainer">
        {boxes}
      </div>
    );
  }
}

export default ColorBoxContainer;