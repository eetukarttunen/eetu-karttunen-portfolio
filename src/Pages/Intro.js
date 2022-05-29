import React, { useState } from 'react';
import "./Intro.css";
import intro from '../intro.png';

function Intro() {
  
  return (
    <div className="intro">
      <div className="intro-left">
        <h1 className="name">EETU</h1>
        <h3 className="title">Bachelor of Science</h3>
      </div>
      <div className="intro-right">
        <div className='img-container'>
          <img src="../icons/react.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Intro;
