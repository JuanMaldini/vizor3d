import React from 'react';
import { Link } from 'react-router';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>360 Virtual Tour</h3>
            <p>Creando experiencias inmersivas para explorar el mundo.</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul className="footer-links">
              <li><Link to="/TestRodri">Home</Link></li>
              <li><Link to="/TestRodri">Tour Virtual</Link></li>
              <li><Link to="/TestRodri">Galería</Link></li>
              <li><Link to="/TestRodri">Acerca de</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li>juan.maldini@outlook.com</li>
              <li>+54 9 3576 474180</li>
            </ul>
          </div>
          

        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Vizor 3d. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
