import React from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CustomLink } from './functions';

const Base: React.FC = () => {
  return (
    <>
    <Navbar />
    <main className="main-content">
          <section className="initial-section">
              <div className="initial-container">
                  <h1 className="initial-title">Welcome to Vizor 3D</h1>
                  <p className="initial-description">Discover your best virtual tool to walk around your real estate project.</p>
              </div>
          </section>

          <section className="hero-section">
              <div className="hero-container">
                  <h1 className="hero-title">Explore the World in 360°</h1>
                  <p className="hero-description">
                      Immerse yourself in unique experiences. Discover incredible places
                      from the comfort of your home with our virtual tour technology.
                  </p>
                    <div className="initial-buttons">
                      <Link to="/Samples" className="btn btn-primary">Explore Projects</Link>
                      <CustomLink text="Contact" email="contact@vizor3d.com" className="btn btn-secondary" />
                  </div>
              </div>
          </section>

          <section className="features-section">
              <div className="features-container">
                  <h2 className="section-title">Features</h2>
                  <div className="features-grid">
                      <div className="feature-card">
                          <h3>Complete 360°</h3>
                          <p>Experience full panoramic views with smooth navigation.</p>
                      </div>
                      <div className="feature-card">
                          <h3>High Quality</h3>
                          <p>High-resolution images for an immersive visual experience.</p>
                      </div>
                      <div className="feature-card">
                          <h3>Interactive</h3>
                          <p>Interactive elements that enrich your exploration experience.</p>
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
