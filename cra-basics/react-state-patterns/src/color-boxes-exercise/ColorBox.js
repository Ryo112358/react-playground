import React, { Component } from 'react';
import './ColorBox.css';
import { chooseFrom } from './helpers';

class ColorBox extends Component {
  static defaultProps = {
    colorList: ['purple', 'seagreen', 'lightsalmon', 'magenta',
      'forestgreen', 'burlywood', 'aqua', 'chocolate',
      'darkolivegreen', 'darkcyan', 'firebrick', 'fuchsia',
      'goldenrod', 'hotpink', 'indigo', 'olive']
  }

  constructor(props) {
    super(props);
    this.state = {
      color: chooseFrom(this.props.colorList)
    }

    this.handleClick = this.handleClick.bind(this);
  }

  changeBgColor() {
    let newColor;

    do {
      newColor = chooseFrom(this.props.colorList);
    } while(this.state.color === newColor);

    this.setState({ color: newColor });
  }

  handleClick() {
    this.changeBgColor();
  }

  render() {
    return (
      <div className="ColorBox"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}
      >
      </div>
    );
  }
}

export default ColorBox;