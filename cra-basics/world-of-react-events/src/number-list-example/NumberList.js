import React, { Component } from 'react';
import NumberItem from './NumberItem';

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [3, 6, 9, 12, 15] };

    // Method bindings
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log("Removing", num, "!");
    this.setState(st => ({
      numbers: st.numbers.filter(n => n !== num)
    }));
  }

  render() {
    let nums = this.state.numbers.map(n => (
      <NumberItem key={n} value={n} remove={this.remove} />
    ));
    return (
      <div>
        <h2>Number List</h2>
        {nums}
      </div>
    );
  }
}

export default NumberList;