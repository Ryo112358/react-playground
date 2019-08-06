import React from 'react';
import './App.css';
import ImageHoverEffects from './ImageHoverEffects';
// import TransitionsDemo from './TransitionsDemo';
// import TransformsDemo from './TransformsDemo';
import ButtonHoverEffects from './ButtonHoverEffects';

function App() {
  return (
    <div className="App">
      {/* <TransitionsDemo />
      <TransformsDemo /> */}
      <ButtonHoverEffects />
      <ImageHoverEffects />
    </div>
  );
}

export default App;
