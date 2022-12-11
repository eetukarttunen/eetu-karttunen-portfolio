import React from 'react';
import './Navigation.css';

function Navigation() {

  return (
    <div className="navigation">
        <div className="navigation-container">
            <div className="navigation-styling">
                <div className='navibar-left-menu'></div>
                
                <div className='navibar-right-menu'>
                <a href="https://twitter.com/eetudev" aria-label="twitter" style={{color: "white"}}>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/eetukarttunen" aria-label="linkedin" style={{color: "white"}}>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/eetu-karttunen-912631160/" aria-label="linkedin" style={{color: "white"}}>
                    <i className="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
