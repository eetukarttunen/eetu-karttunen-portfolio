// src/Components/Intro.js
import React from 'react';
import './Intro.css';
import { useLanguage } from './LanguageContext';

function Intro() {
  const { language } = useLanguage();
  const languageData = require(`../languages/${language}.json`);

  return (
    <div className="profile">
      <img src="./icons/eetulapinakyva.png" alt="Profile" className="profile-image" />
      <h2 className="profile-name">{languageData.name}</h2>
      <p className="profile-title">{languageData.title}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href={languageData.github} aria-label="GitHub" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fab fa-github"></i>
        </a>
        <a href={languageData.email} aria-label="Email" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fa fa-envelope"></i>
        </a>
        <a href={languageData.linkedin} aria-label="LinkedIn" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <br/>
      <div className="button-container">
      <button className='row-button'>{languageData.aboutButton}</button>
      <button className='row-button'>{languageData.projectsButton}</button>
      <button className='row-button'>{languageData.elementsButton}</button>
      </div>
    </div>
  );
}

export default Intro;
