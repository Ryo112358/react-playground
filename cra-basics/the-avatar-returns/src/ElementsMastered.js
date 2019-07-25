import React, { Component } from 'react'

class ElementsMastered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements : 6,
      mastered : 1
    }

    this.train = this.train.bind(this);
  }

  train() {
    let rand = Math.floor(Math.random() * this.state.elements) + 1;
    this.setState({mastered: rand});
  }

  render() {
    const trainButton = <button onClick={this.train}>Train</button>;
    const readyForDuel = <h3>You are ready to face the firelord!</h3>

    return (
      <div>
        <h3>Elements mastered: {this.state.mastered}</h3>
        {this.state.mastered > 4 ? readyForDuel : trainButton}
      </div>
    );
  }
}

export default ElementsMastered;