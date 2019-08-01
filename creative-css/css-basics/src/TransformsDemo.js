import React, { PureComponent } from 'react'
import './TransformsDemo.css';
import imgAppa from './images/appa.jpg';
import imgMomo from './images/momo-curious.jpeg';
import imgAang from './images/aang.jpg';
import imgSpiritWorld from './images/spirit-world.jpg';
import imgKyoshi from './images/kyoshi.png';

class TransformsDemo extends PureComponent {
  render() {
    return (
      <div className="TransformsDemo">
        <img className="Appa-translate" src={imgAppa} alt="appa" />
        <img className="Momo-scale" src={imgMomo} alt="momo" />
        <img className="Aang-rotate" src={imgAang} alt="aang" />
        <img className="Spirit-world-skew"src={imgSpiritWorld} alt="spirit world" />
        <img className="Kyoshi-origin" src={imgKyoshi} alt="kyoshi" />
        <hr />
        <div className="TransformsDemo-3d-container">
          <img className="Appa-3d-translate" src={imgAppa} alt="flying-appa" />
        </div>
      </div>
    );
  }
}

export default TransformsDemo;