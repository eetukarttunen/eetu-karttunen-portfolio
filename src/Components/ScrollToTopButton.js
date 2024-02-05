import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import your CSS file

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Show or hide the button based on the scroll position
    setIsVisible(scrollTop > 50);
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollToTop}
      className={isVisible ? 'visible' : ''}
    />
  );
};

export default ScrollToTopButton;
