import React from 'react';
import "./Intro.css";

function Intro() {
  
  return (
    <div className="intro">
      
      <div className="intro-main">
        <img className="img-border" alt="portrait" src="./icons/eetu.png"/>
        <h1 className="name">
          Eetu Karttunen.
        </h1>
        <div className='developer-title'>
          Full Stack Developer,
          Runner,
          Guitar builder
        </div>
      </div>
    </div>
  );
}

export default Intro;
