import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Intro from './Pages/Intro';
import Portfolio from './Pages/Portfolio';
import Technologies from './Pages/Technologies';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='container'>
        <div className="sections">
          <section>
            <Intro/>
          </section>
          <section className='two'>
            <Portfolio/>
          </section>
          <section className='three'>
            <Technologies/>
          </section >
          <section className='four'>
            <Contact/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
