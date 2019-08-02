import React, { PureComponent } from 'react';
import './ButtonHoverEffects.css';

class ButtonHoverEffects extends PureComponent {
  render() {
    return (
      <div className="BHE">
        <div className="BHE-button-block">
          <button id="BHE-effect-1" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-2" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-3" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-4" className="BHE-button-style">Hover me!</button>
        </div>

        <div className="BHE-button-block" style={{ background: "#222"}}>
          <button id="BHE-effect-5" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-6" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block" style={{ background: "#222"}}>
          <button id="BHE-effect-7" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-8" className="BHE-button-style">Hover me!</button>
        </div>

        <div className="BHE-button-block">
          <button id="BHE-effect-9" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-10" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-11" className="BHE-button-style">Hover me!</button>
        </div>
        <div className="BHE-button-block">
          <button id="BHE-effect-12" className="BHE-button-style">Hover me!</button>
        </div>
      </div>
    );
  }
}

export default ButtonHoverEffects;