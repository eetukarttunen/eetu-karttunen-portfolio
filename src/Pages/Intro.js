import React, { useState } from 'react';
import "./Intro.css";
import intro from '../intro.png';

function Intro() {
  
  return (
    <div className="intro">
      <div className="intro-left">
        <div className='img-container'>
          <img src="../icons/java.png"></img>
        </div>
      </div>
      <div className="intro-right">
        <div className='wrap'>
          <h1>Eetu Karttunen</h1>
          <h3>Software Specialist</h3>
        </div>
      </div>
    </div>
  );
}

export default Intro;
