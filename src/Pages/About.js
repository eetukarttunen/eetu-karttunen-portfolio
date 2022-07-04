import React, { useState } from 'react';
import "./About.css";

function About() {
  
  return (
    <div className='about'>
      <h2>About me</h2>
      <div className='about-text-container'>
      <Highlighted
        text="Hello! Hello! My name is Eetu and I enjoy creating new things with code.
        My interest in software development started back in high school when I decided to try coding mobile apps — coding gave me the spark to apply to study Computer Science!"
        highlight="Eetu"
      />
      <p>{'\n'}</p>
      <Highlighted
        text="I have had the privilege of working versatilely in software development and data warehousing since the beginning of my studies. 
        I currently work as a Specialist in software development at Meita. 
        In my previous position, I worked as a data engineer, which taught me a lot about modern data processing and the versatile use of data in software development. "
        highlight="Specialist"
      />
      
      <p>{'\n'}</p>
      <Highlighted
        text= "I'm also a master's student in Computer Science. In my studies, I focus on machine learning & software development." 
        highlight="master's student"
        >
      </Highlighted>
      </div>
    </div>
  );
}

export default  About;

const Highlighted = ({ text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);


return (
  <span>
    {parts.filter(String).map((part, i) => {
      return regex.test(part) ? (
        <mark key={i}>{part}</mark>
      ) : (
        <span key={i}>{part}</span>
      );
    })}
  </span>
);
}
