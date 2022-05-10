import React, {useEffect, useState} from 'react';
import './Navigation.css';
import Menu from '@material-ui/icons/Menu';

function Navigation() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


  return (
    <div className="navigation">
        <div className="navigation-styling">
            <div className="navigation-left">
                <h1>EETU</h1>
            </div>
            <a href="https://www.linkedin.com/in/eetu-karttunen-912631160/" aria-label="linkedin" style={{color: "white"}}>
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/eetukarttunen" aria-label="linkedin" style={{color: "white"}}>
                <i className="fab fa-github"></i>
            </a>
            <div className="navigation-right">
                <Menu className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </Menu>
            <ul className={click ? 'navi-menu active' : 'navi-menu'}></ul>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
