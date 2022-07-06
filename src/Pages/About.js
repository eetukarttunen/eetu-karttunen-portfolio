import React from 'react';
import "./About.css";

function About() {
  
  return (
    <div className='about'>
      <h2>About me</h2>
      <div className='about-text-container'>
      <Highlighted
        text="Hello! My name is Eetu and I enjoy creating new things with code.
        My interest in software development started back in high school when I wrote my first lines of code. 
        After high school, I ended up studying computer science, which was one of the best decicions of my life."
        highlight="Eetu"
      />
      <p>{'\n'}</p>
      <Highlighted
        text="I've had the privilege of working versatilely in software development and data warehousing since the beginning of my studies. 
        I currently work as a Specialist in software development at Meita. 
        In my previous position, I worked as a data engineer, which taught me a lot about modern data processing and possibilities of data warehouse automation."
        highlight="Specialist"
      />
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
