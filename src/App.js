// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Intro from './Components/Intro';
import About from './Components/About';
import Sandbox from './Components/Sandbox';
import { LanguageProvider } from './Components/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/sandbox" element={<Sandbox />} />
          </Routes>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
