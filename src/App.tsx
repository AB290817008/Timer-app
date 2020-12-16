import React from 'react';
import './App.css';
import Timer from './components/timer'

function App() {
  return (
    <div>
      <h1 id = "heading">Timer Application</h1>
      <Timer data-testid = "timer"></Timer>
    </div>
  );
}

export default App;
