import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Base: React.FC = () => {
  return (
    <>
    <Navbar />
    <main className="main-content">
          <section className="hero-section">
              <div className="hero-container">
                  <h1 className="hero-title">Explora el Mundo en 360°</h1>
                  <p className="hero-description">
                      Sumérgete en experiencias inmersivas únicas. Descubre lugares increíbles
                      desde la comodidad de tu hogar con nuestra tecnología de tours virtuales.
                  </p>
                  <div className="hero-buttons">
                      <Link to="/Sample1" className="btn btn-primary">Comenzar Tour</Link>
                      <Link to="/Sample1" className="btn btn-secondary">Ver Galería</Link>
                  </div>
              </div>
          </section>

          <section className="features-section">
              <div className="features-container">
                  <h2 className="section-title">Características</h2>
                  <div className="features-grid">
                      <div className="feature-card">
                          <h3>360° Completo</h3>
                          <p>Experimenta vistas panorámicas completas con navegación fluida.</p>
                      </div>
                      <div className="feature-card">
                          <h3>Alta Calidad</h3>
                          <p>Imágenes de alta resolución para una experiencia visual inmersiva.</p>
                      </div>
                      <div className="feature-card">
                          <h3>Interactivo</h3>
                          <p>Elementos interactivos que enriquecen tu experiencia de exploración.</p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
      <Footer />
      </>
  );
};

export default Base;
