import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from './functions';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>360 Virtual Experiences</h3>
            <p>Creating immersive experiences to explore the world.</p>
          </div>
          
          <div className="footer-section">
            <h4>Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              <li><CustomLink text="Contact" email="contact@vizor3d.com" /></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><CustomLink text="contact@vizor3d.com" email="contact@vizor3d.com" /></li>
            </ul>
          </div>
          

        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Vizor 3d. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
