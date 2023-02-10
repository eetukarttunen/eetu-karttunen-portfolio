import React from 'react';
import "./Intro.css";

function Intro() {

  return (
    <div className="profile">
      <img
        src="./icons/eetulapinakyva.png"
        alt="Profile"
        className="profile-image"
      />

      <h2 className="profile-name">Eetu Karttunen</h2>
      <p className="profile-title">Full Stack Developer</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        
        <a href="https://github.com/eetukarttunen" aria-label="linkedin" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fab fa-github"></i>
        </a>

        <a href="mailto: eetu.karttunen@outlook.com" aria-label="email" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fa fa-envelope"></i>
        </a>

        <a href="https://www.linkedin.com/in/eetukarttunen" aria-label="linkedin" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fab fa-linkedin-in"></i>
        </a>
        
      </div>


    </div>
  );
}

export default Intro;
