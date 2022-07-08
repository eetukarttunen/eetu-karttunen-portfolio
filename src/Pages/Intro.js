import React from 'react';
import "./Intro.css";

function Intro() {
  
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-name">Eetu Karttunen</h1>
          <div className="i-title-item">Full Stack Developer</div>
        </div>
      </div>
      <div className="i-right">
      <div className="i-bg">
        <img src={"./icons/eetu.png"} alt="portrait" className="i-img" />
      </div>
    </div>
    </div>
  );
}

export default Intro;
