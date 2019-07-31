import React, { Component } from 'react'

class NumberItem extends Component {
  constructor(props) {
    super(props);

    // Method bindings
    this.handleRemove = this.handRemove.bind(this);
  }

  handRemove(evt) {
    this.props.remove(this.props.value);
  }

  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>Delete</button>
      </li>
    );
  }
}

export default NumberItem;