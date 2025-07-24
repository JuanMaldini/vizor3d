import React from 'react';
import ProjectCard from '../components/projectCard/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects: React.FC = () => {
  return (
    <>
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">Our Projects</h1>
            <p className="hero-description">Explore our amazing virtual tours and immersive experiences.</p>
          </div>
        </section>
        <section className="projects-section">
          <div className="projects-container">
            <div className="projects-grid">
              <ProjectCard
                title="360 Virtual Tour"
                description="Explore the world in 360°"
                author=""
                redirectPath="/Sampleai_01"
                image="../../src/images/projects/sampleai09/Sample_AI09_01.png"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
