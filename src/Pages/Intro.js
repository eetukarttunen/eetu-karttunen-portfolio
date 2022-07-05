import React from 'react';
import "./Intro.css";

function Intro() {
  
  return (
    <div className="intro">
      
      <div className="intro-main">
        <img src="./icons/intro.png"/>
        <h1 className="name">
          Eetu Karttunen.
        </h1>
        <div className='developer-title'>
          Software Developer & Master's student
        </div>
      </div>
    </div>
  );
}

export default Intro;
