// DarkModeSwitch.js
import React, { useState } from 'react';
import "./DarkModeSwitch.css";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
     localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <label className={`switch ${isDarkMode ? '' : ''}`}>
      <input id="toggle" type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  );
};

export default DarkModeSwitch;
