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
            </div>
            <h1>EETU</h1>
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
