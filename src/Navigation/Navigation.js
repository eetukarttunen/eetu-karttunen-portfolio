// src/Navigation/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../Components/LanguageSwitcher';
import { useLanguage } from '../Components/LanguageContext';
import DarkModeSwitcher from '../Components/DarkModeSwitch';
import './Navigation.css';

const Navigation = () => {
  const { language } = useLanguage();
  const languageData = require(`../languages/${language}.json`);

  return (
    <nav className="navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          EK
        </Link>
        <div className="navbar-links">
          <Link to="/projects" className="navbar-link">
            {languageData.projectsText}
          </Link>
          <Link to="/demos" className="navbar-link">
            {languageData.demosText}
          </Link>
          <br />
          <LanguageSwitcher />
          <br/>
          <DarkModeSwitcher/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
