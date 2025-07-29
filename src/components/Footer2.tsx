import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from './functions';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; 2025 Vizor 3d. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
