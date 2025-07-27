import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from './functions';
import logo from '../../public/Icons/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt='Logo' height='32' /></Link>
          <Link to="/"><h2>VIZOR 3D</h2></Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <CustomLink text="Contact" email="contact@vizor3d.com" className="nav-link" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
