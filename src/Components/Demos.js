import React from 'react';
import "./About.css";
import { useLanguage } from './LanguageContext';

function Demos() {
  const { language } = useLanguage();
  const languageData = require(`../languages/${language}.json`);

  return (
    <div className="universal-page-container">
      
      <h1>{languageData.demosText}</h1>
      <p>{languageData.demosParagraph}</p>

      <img
        className="construction-site"
        src="./icons/dummy.jpg"
        alt="Profile"
      />

    </div>
  );
}

export default Demos;
