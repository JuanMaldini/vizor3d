import React from 'react';
import ProjectCard from '../components/projectCard/ProjectCard';

import rsample from '../images/projects/RSample/1.jpg';
import Sampleai_01 from '../images/projects/sampleai09/Sample_AI09_01.png';

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
                title="360 Saloon"
                description="Explore interiors in 360°"
                author="Rodrigo"
                redirectPath="/RSample"
                image={rsample}
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
    </>
  );
};

export default Projects;
