import React, { useState } from 'react';
import "./Portfolio.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJava, faPython, faPhp, faWordpressSimple, faDocker } from "@fortawesome/free-brands-svg-icons"

function Portfolio() {
  
  return (
    <div className='portfolio'>
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

export default Portfolio;
