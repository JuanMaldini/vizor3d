import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

import RSample from '../images/projects/RSample/1.jpg';
import Sampleai_01 from '../images/projects/sampleai09/Sample_AI09_01.jpg';


const Projects: React.FC = () => {
  return (
    <>
      <Navbar />
        <main className="main-content">
          <section className="hero-section">
            <div className="hero-container">
              <h1 className="hero-title">Our Projects</h1>
              <p className="hero-description">Explore our amazing virtual tours and immersive experiences.</p>
              <Link to="/Viewer3d" className="btn btn-primary">Model Viewer</Link>
              
            </div>
          </section>

          <section className="projects-section">
            <div className="projects-container">
              <div className="projects-grid">
                <ProjectCard
                  title="360 Saloon"
                  description="Explore interiors in 360°"
                  author="Rodrigo"
                  redirectPath="/RSample"
                  image={RSample}
                />
                <ProjectCard
                  title="360 Virtual Tour"
                  description="Explore the world in 360°"
                  author="Sample"
                  redirectPath="/Sampleai_01"
                  image={Sampleai_01}
                />
              </div>
            </div>
          </section>

        </main>
      <Footer />
    </>
  );
};

export default Projects;
