import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from './functions';

const Footer: React.FC = React.memo(() => (
  <footer className="footer" aria-label="Site footer">
    <div className="footer-bottom">
      <p>&copy; 2025 Vizor 3D. All rights reserved.</p>
    </div>
  </footer>
));

export default Footer;
