import React from 'react';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/"><h2>VIZOR 3D</h2></Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Sample1" className="nav-link">Tour Virtual</Link>
          </li>
          <li className="nav-item">
            <Link to="/Sample1" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/Sample1" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
