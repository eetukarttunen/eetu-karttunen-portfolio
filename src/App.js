import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Intro from './Pages/Intro';
import About from './Pages/About';
import Resume from './Pages/Resume';

function App() {
     
  return (
    <div className="App">
      <Navigation/>
      <Intro/>
      <About/>


    </div>
  );
}

export default App;
