import React, {useEffect, useState} from 'react';
import './Navigation.css';
//import Menu from '@material-ui/icons/Menu';

function Navigation() {
    const [text, setText] = useState(":D");

    const onChange = () => {
        if (text === ':D') {
            setText('D:')
        }
        else if (text === 'D:') {
            setText(':D')
        }

    }


  return (
    <div className="navigation">
        <div className="navigation-styling">
            <div className="navigation-left">
                <h1 className='site-name' style = {{cursor: 'pointer'}} onClick={() => window.location.reload()}>EETUDEV</h1>
            </div>
            <a href="https://www.linkedin.com/in/eetu-karttunen-912631160/" aria-label="linkedin" style={{color: "white"}}>
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/eetukarttunen" aria-label="linkedin" style={{color: "white"}}>
                <i className="fab fa-github"></i>
            </a>
            <div className="navigation-right">
                <div className='right-icon'>
                    <h3 style = {{cursor: 'pointer'}}  onClick={() => onChange()}>{text}</h3>  
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
