import React, { useState } from 'react';
import "./Intro.css";

function Intro() {
  
  return (
    <div className="intro">
      <div className="intro-left">
        <div className='img-container'></div>
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
