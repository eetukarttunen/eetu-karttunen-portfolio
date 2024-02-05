import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section-left">
        {/*Content coming soon*/}
        </div>
        <div className="footer-section-center">
        <Link to="/" className="navbar-brand">
          EK
        </Link>
        </div>
        <div className="footer-section-right">
        {/*Content coming soon*/}
        </div>
      </div>
    </footer>

  );
};


export default Footer;
