import React from 'react';
import "./Intro.css";

function Intro() {
  
  return (
    <div className="i">
      <div className="i-left">
          <img class="i-portrait" src={"./icons/eetu.png"} alt="portrait of eetu"/>
      
      </div>
      <div className="i-right">
        <div class="i-name">
        <h1 class="text">Eetu Karttunen</h1>
        <p class="text">A Software Developer based in Joensuu</p>
       
      </div>
      </div>
    </div>
  );
}

export default Intro;
