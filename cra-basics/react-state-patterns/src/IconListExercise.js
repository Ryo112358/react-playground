import React, { Component } from 'react';

class IconListExercise extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archway",
      "bell",
      "bolt",
      "bone",
      "city",
      "couch"
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      icons: []
    }
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];

    this.setState({ icons: [ ...this.state.icons, newIcon] });  // Proper way of updating array/object in state
  }

  render() {
    const icons = this.state.icons.map(icon => <i className={`fas fa-${icon}`} />);
    return (
      <div>
        <h3>Icons: {icons}</h3>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconListExercise;