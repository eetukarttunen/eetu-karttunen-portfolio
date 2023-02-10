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
      <p className="profile-title">Software Developer</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        
        <a href="https://github.com/eetukarttunen" aria-label="linkedin" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fab fa-github"></i>
        </a>

        <a href="https://twitter.com/eetudev" aria-label="twitter" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fab fa-twitter"></i>
        </a>

        <a href="https://www.linkedin.com/in/eetukarttunen" aria-label="linkedin" style={{ color: "white", textAlign: "center", padding: "0px 12px 0px 12px" }}>
          <i className="fab fa-linkedin-in"></i>
        </a>
        
      </div>


    </div>
  );
}

export default Intro;
