import * as React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

    return (
        <nav className="navigation">
            <div className="navbar-container">
              
                    <Link to="/" className="navbar-brand">
                        EK
                    </Link>
                    <div className="navbar-links">
                        <Link to="/about" className="navbar-link">
                            About
                        </Link>
                        <Link to="/work" className="navbar-link">
                            Work
                        </Link>
                        <Link to="/contact" className="navbar-link">
                            Sandbox
                        </Link>
                    </div>
     
            </div>

        </nav>
    );
}

export default Navigation;
