import React, { Component } from 'react';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Aang",
      nation: "Air",
      age: 112,
      airBison: "Appa",
      exp: 25
    };
  }

  makeTimer() {
    setInterval(() => {
      this.setState({exp: this.state.exp + 1})
    }, 1000);
  }

  render() {
    let state = this.state;

    return (
      <div>
        <h1>Avatar {state.name}</h1>
        <h2>Age {state.age}</h2>
        <h2>Experience {state.exp}</h2>
      </div>
    );
  }
}

export default Avatar;