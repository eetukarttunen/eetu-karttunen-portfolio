import React, { useState } from 'react';
import "./Intro.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJava, faPython, faPhp, faWordpressSimple, faDocker } from "@fortawesome/free-brands-svg-icons"

/*
 <div className='icons-container'>
          <img src="../logo512.png"></img>
          <img src="../logo512.png"></img>
          <img src="../logo512.png"></img>
        </div>

*/
function Intro() {
  
  return (
    <div className="intro">
      <div className="intro-left">
        <h1 className="name">Eetu Karttunen.</h1>
        <h3 className='title'><div className='developer-title'>Software Developer</div></h3>
        
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
    </div>
  );
}

export default Intro;
