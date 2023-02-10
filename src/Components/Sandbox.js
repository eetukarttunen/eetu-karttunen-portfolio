import React from 'react';
import "./Sandbox.css";

function Sandbox() {

  return (

    <div className="sandbox">

      <h1>Sandbox</h1>

      <p>Welcome to the Sandbox page!</p>
      <p style={{textAlign: "left", fontWeight: 'lighter'}}>This is where I showcase and test different React components that I have coded myself. This page serves as a playground for me to experiment with new ideas, try out different design concepts, and bring my visions to life. Whether you are a fellow developer or just someone who is interested in what I do, I hope you enjoy exploring this page as much as I enjoyed creating it.</p>
      
      <img
        src="./icons/dummy.jpg"
        alt="Profile"
      />
    </div>
  );
}

export default Sandbox;
