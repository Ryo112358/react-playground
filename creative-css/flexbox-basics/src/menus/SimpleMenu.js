import React, { PureComponent } from 'react'
import './SimpleMenu.css';

class SimpleMenu extends PureComponent {
  render() {
    return (
      <div className="SimpleMenu">
        <h2 className="SimpleMenu-header">Simple Menu</h2>
        <nav className="SimpleMenu-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SimpleMenu;