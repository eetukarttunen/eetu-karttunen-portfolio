// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Demos from './Components/Demos';
import { LanguageProvider } from './Components/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <ScrollToTopButton/>
        <Navigation />
        <div className="App-header">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/demos" element={<Demos />} />
            </Routes>
          </ScrollToTop>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
