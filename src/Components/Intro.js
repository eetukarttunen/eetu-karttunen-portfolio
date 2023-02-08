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
    <h2 className="profile-name">Työmaa käynnissä</h2>

  </div>
  );
}

export default Intro;
