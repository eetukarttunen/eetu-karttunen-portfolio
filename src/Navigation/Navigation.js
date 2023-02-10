import * as React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

    return (
        <nav className="navigation">
            <div className="navbar-container">
                <Router>
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
                            Contact
                        </Link>
                    </div>
                </Router>
            </div>

        </nav>
    );
}

export default Navigation;
