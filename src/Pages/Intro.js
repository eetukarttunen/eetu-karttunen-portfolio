import React, { useState } from 'react';
import "./Intro.css";

function Intro() {
  
  return (
    <div className="intro">
      <div className="intro-left">
        <img style={{
          borderRadius: "50%",
          width: 500,
          height: 500,
          background: "rgb(53, 56, 83)",
          display: "block"
        }}></img>
      </div>
      <div className="intro-right">
        <h1 className='header'>EETU KARTTUNEN {'\n'} <h2 className='title'>SOFTWARE DEVELOPER</h2></h1>
      </div>
    </div>
  );
}

export default Intro;
