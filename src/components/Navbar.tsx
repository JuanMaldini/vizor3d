import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from './functions';
import logo from '/public/Icons/Logo.svg';

const Navbar: React.FC = React.memo(() => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt='Logo' height='32' /></Link>
          <Link to="/" style={{ textDecoration: 'none'}}><h2>VIZOR 3D</h2></Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <CustomLink text="Contact" email="contact@vizor3d.com" className="nav-link" />
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
