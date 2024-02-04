import React from 'react';
import "./Projects.css";
import { useLanguage } from './LanguageContext';

function Projects() {
  const { language } = useLanguage();
  const languageData = require(`../languages/${language}.json`);

  return (
    <div className="universal-page-container">
      
      <h1>{languageData.projectsText}</h1>
      <p>{languageData.projectsParagraph}</p>

      <h2>{languageData.opiskelijaruokalistatHeading}</h2>
      <h3>{languageData.opiskelijaruokalistatDetails}</h3>
      <img
        className='project-picture'
        src="./icons/opiskelijaruokalistat.png"
        alt="Example picture of opiskelijaruokalistat web application."
      />
      <p>{languageData.opiskelijaruokalistatDescription}</p>

      <h2>{languageData.atkytpHeading}</h2>
      <h3>{languageData.atkytpDetails}</h3>
      <img
        className='project-picture'
        src="./icons/atkytp.png"
        alt="Example picture of opiskelijaruokalistat web application."
      />
      <p>{languageData.atkytpDescription}</p>
      <br/>
    </div>
  );
}

export default Projects;
