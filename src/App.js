import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Intro from './Pages/Intro';
import Portfolio from './Pages/Portfolio';
import Technologies from './Pages/Technologies';
import Contact from './Pages/Contact';
import createScrollSnap from 'scroll-snap'

function App() {
     
  return (
    <div className="App">
      <Navigation/>
      <div className='container'>
        <div className="sections">
          <section id="1">
            <Intro/>
          </section>
          <section id="2">
            <Technologies/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
