import React, { useState } from 'react';
import "./Technologies.css";

/*
      <img className= "icon" src='/icons/react.png' />
      <img className= "icon" src='/icons/redux.png' />
      <img className= "icon" src='/icons/nodejs.png' />
      <img className= "icon" src='/icons/mysql.png' />
      <img className= "icon" src='/icons/mongodb.png' />
      <img className= "icon" src='/icons/wordpress.png' />
      <img className= "bigicon" src='/icons/gcp.png' />
      <img className= "icon" src='/icons/java.png' />
*/
function Technologies() {
  
  return (
    <div className='technologies'>
      <h1>TECHNOLOGIES I HAVE WORK EXPERIENCE IN</h1>

        <div className="technologies-container">
          <img className= "icon" src='/icons/react.png' alt="react"/>
          <img className= "icon" src='/icons/redux.png' alt="redux"/>
          <img className= "icon" src='/icons/nodejs.png' alt="nodejs"/>
          <img className= "icon" src='/icons/mysql.png' alt="mysql"/>
          <img className= "icon" src='/icons/mongodb.png' alt="mongodb"/>
          <img className= "icon" src='/icons/wordpress.png' alt="wordpress"/>
          <img className= "icon" src='/icons/java.png' alt="java"/>
          <img className= "icon" src='/icons/python.png' alt="python"/>
        </div>
   
    </div>
  );
}

export default Technologies;
