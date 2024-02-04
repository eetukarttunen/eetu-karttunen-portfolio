import React from 'react';
import "./About.css";
import { useLanguage } from './LanguageContext';

function Projects() {
  const { language } = useLanguage();
  const languageData = require(`../languages/${language}.json`);

  return (
    <div className="universal-page-container">
      
      <h1>{languageData.projectsText}</h1>
      <p>{languageData.projectsParagraph}</p>

    </div>
  );
}

export default Projects;
