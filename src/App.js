import React from 'react';
import './App.css';
import Intro from './Components/Intro';
import Navigation from './Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App-header">
        <Intro />
      </div>
    </div>
  );
}

export default App;
