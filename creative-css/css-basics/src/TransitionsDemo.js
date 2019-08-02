import React, { PureComponent } from 'react'
import './TransitionsDemo.css';

class TransitionsDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moveButton: [true, true , false, true]
    }
  }

  genMovingButtonStyle(buttonid) {
    return "TD-moving-button" + (this.state.moveButton[buttonid-1] ? " TD-move" : "");
  }

  render() {
    return (
      <div className="TransitionsDemo">
        <div className="TD-container-1">
          <button id="TD-button-1">Button 1</button>
          <button className="TD-button-2">Button 2</button>
          <button className="TD-button-3">Button 3</button>
        </div>
        <div className="TD-container-2">
          <button id="ease" className={this.genMovingButtonStyle(1)}>Ease (default)</button><br />
          <button id="linear" className={this.genMovingButtonStyle(2)}>Linear</button><br />
          <button id="ease-in" className={this.genMovingButtonStyle(3)}>Ease-in</button><br />
          <button id="ease-out" className={this.genMovingButtonStyle(4)}>Ease-out</button>
        </div>
      </div>
    );
  }
}

export default TransitionsDemo;