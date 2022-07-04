import React from 'react';
import "./Intro.css";
import TypeWriterEffect from 'react-typewriter-effect';

function Intro() {
  
  return (
    <div className="intro">
      <div className="intro-left">
        <h1 className="name">Eetu Karttunen.</h1>
        <div className='developer-title'>
          <TypeWriterEffect
          textStyle={{
            color: 'rgb(59, 157, 209)',
            fontWeight: 500,
            fontSize: '20px',
            'text-align': 'center',
          }}
          cursorColor="#3F3D56"
          multiText={[
            'Software Specialist',
          ]}
          multiTextDelay={2000}
          typeSpeed={80}
          hideCursorAfterText={true}
          multiTextLoop={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
