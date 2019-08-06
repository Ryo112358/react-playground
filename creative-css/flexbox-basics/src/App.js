import React from 'react';
import './App.css';
import SimpleMenu from './menus/SimpleMenu';
import AdvancedMenu from './menus/AdvancedMenu';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Flexbox Menus</h1>
      <SimpleMenu />
      <AdvancedMenu />
    </div>
  );
}

export default App;
