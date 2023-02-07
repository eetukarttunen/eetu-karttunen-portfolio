import React from 'react';
import "./Intro.css";

function Intro() {

  return (
    <div className="profile">
    <img
      src="./icons/dummy.jpg"
      alt="Profile"
      className="profile-image"
    />
    <h1 className="profile-name">Työmaa käynnissä :)</h1>

  </div>
  );
}

export default Intro;
