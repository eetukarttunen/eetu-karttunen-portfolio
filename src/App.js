import React from 'react';
import './App.css';
import Intro from './Components/Intro';
import About from './Components/About';
import Career from './Components/Career';
import Navigation from './Navigation/Navigation';


function App() {

  return (
    <div className="App">
      <Navigation />
      <div className="App-max">
        <Intro />
        <About/>
        <Career />
      </div>
    </div>
  );
}

export default App;
