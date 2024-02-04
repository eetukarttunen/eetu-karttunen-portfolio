import React from 'react';
import "./About.css";
import { useLanguage } from './LanguageContext';

function About() {
  const { language } = useLanguage();
  const languageData = require(`../languages/${language}.json`);

  return (
    <div className="universal-page-container">
      
      <h1>{languageData.aboutText}</h1>
      <p>{languageData.aboutParagraph}</p>

    </div>
  );
}

export default About;
