import React, { PureComponent } from 'react'
import './AdvancedMenu.css';

class AdvancedMenu extends PureComponent {
  render() {
    return (
      <div className="AdvancedMenu">
        <h2 className="AdvancedMenu-header">Advanced Menu</h2>
        <nav className="AdvancedMenu-nav">
          <ul>
            <li>
              <a href="#">
                <div className="AdvancedMenu-icon">
                  <i class="fas fa-table-tennis"></i>
                </div>
                <div className="AdvancedMenu-text">
                  table tennis
                  <span className="AdvancedMenu-subtitle">is a great sport</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="AdvancedMenu-icon">
                  <i class="fas fa-film"></i>
                </div>
                <div className="AdvancedMenu-text">
                  movies
                  <span className="AdvancedMenu-subtitle">make your life better</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="AdvancedMenu-icon">
                  <i class="fas fa-camera"></i>
                </div>
                <div className="AdvancedMenu-text">
                  camera
                  <span className="AdvancedMenu-subtitle">captures great moments</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default AdvancedMenu;