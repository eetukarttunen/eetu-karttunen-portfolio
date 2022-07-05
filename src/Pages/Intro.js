import React from 'react';
import "./Intro.css";

function Intro() {
  
  return (
    <div className="intro">
      
      <div className="intro-main">
        <img className="img-border" src="./icons/eetu.png"/>
        <h1 className="name">
          Eetu Karttunen.
        </h1>
        <div className='developer-title'>
          Software Developer
        </div>
      </div>
    </div>
  );
}

export default Intro;
