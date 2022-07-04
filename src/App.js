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
      <div className='App-container'>
        <div className="sections">
          <section id="1">
            <Intro/>
          </section>
          <section id="2">
            <About/>
          </section>
          <section id="3">
            <Resume/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
