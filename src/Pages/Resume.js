
import React, { useState } from 'react';
import "./Resume.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJava, faPython, faPhp, faWordpressSimple, faDocker } from "@fortawesome/free-brands-svg-icons"

function Resume() {
  
  return (
    <div className='resume'>
      <h2>Resume</h2>
      <div className='resume-text-container'>
      Here are a few technologies I’ve been working with recently:
      </div>
      <div className='icons-container'>
    <FontAwesomeIcon icon={ faReact } />
        <FontAwesomeIcon icon={ faNodeJs } />
        <FontAwesomeIcon icon={ faJava } />
        <FontAwesomeIcon icon={ faPython } />
        <FontAwesomeIcon icon={ faPhp } />
        <FontAwesomeIcon icon={ faWordpressSimple } />
        <FontAwesomeIcon icon={ faDocker } />
    </div>
    </div>
  );
}

export default Resume;
