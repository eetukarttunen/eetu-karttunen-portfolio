import React from 'react';
import './Navigation.css';
//import Menu from '@material-ui/icons/Menu';

function Navigation() {

  return (
    <div className="navigation">
        <div className="navigation-styling">
            <div className='navibar-left-menu'>
                <h1 className='site-name' style = {{cursor: 'pointer'}} onClick={() => window.location.reload()}></h1>
            </div>
            
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
  );
}

export default Navigation;
