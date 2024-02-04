// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Intro from './Components/Intro';
/*import About from './Components/About';*/
import Projects from './Components/Projects';
import Demos from './Components/Demos';
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
            <Route path="/projects" element={<Projects />} />
            <Route path="/demos" element={<Demos />} />
          </Routes>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
