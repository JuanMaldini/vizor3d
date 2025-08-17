import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';
import '../styles/App.css';

// Configs de panoramas reutilizados para las cards (solo usan la primera imagen)
import { panellumConfig_Noiseless_Sample01 } from '../types/PanoramasConfig/panellumConfig_Noiseless_Sample01';
import { panellumConfig_SampleAI } from '../types/PanoramasConfig/panellumConfig_SampleAI';

import ModelViewer from '../components/ModelViewer';
 
import Faq from '../components/Faq';
import Footer1 from '../components/Footer1';

const Projects: React.FC = () => {
  return (
    <main className="projects2-main">
        <section className="projects2-hero">
          <h1 className="projects2-title">Our Projects</h1>
          <p className="projects2-desc">Discover our 3D interactive web experiences. Each project is crafted with passion and technical excellence.</p>
        </section>

        <section className="projects2-nav-section">
          <h2 className="projects2-nav-title">Explore by Category</h2>
          <div className="projects2-nav-buttons">
            <button className="btn btn-secondary" onClick={() => document.getElementById('section1')?.scrollIntoView({ behavior: 'smooth' })}>
              Virtual Tour
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth' })}>
              Model Viewer
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('section3')?.scrollIntoView({ behavior: 'smooth' })}>
              Augmented Reality
            </button>
          </div>
        </section>

        <section id="section1" className="projects2-section">
          <h3 className="projects2-section-title">Virtual Tour</h3>
          <p className="projects2-section-desc">Explore your 3D spaces by 360° images </p>
          <div className="projects2-cards-row">
            <ProjectCard
              title="360 Saloon"
              description="Explore interiors in 360°"
              author="Noiselss Studio"
              seeMoreLink="https://www.noiseless-studio.com/"
              redirectPath="/Noiseless_Sample01"
              setup={panellumConfig_Noiseless_Sample01}
            />
            <ProjectCard
              title="360 Virtual Tour"
              description="Explore the world in 360°"
              author="Sample"
              redirectPath="/Sampleai"
              setup={panellumConfig_SampleAI}
            />
          </div>
        </section>
        
        <section id="section2" className="projects2-section">
          <h3 className="projects2-section-title">Model Viewer</h3>
          <p className="projects2-section-desc">View and interact with 3D models in real-time.</p>
          <div className="projects2-cards-row">
            <div className="models-viewer-container">

              <article
                className="model-viewer-card project-card-link"
                onClick={() => window.location.href = '/ModelViewer_Car'}
              >
                <ModelViewer
                  src="/3dmodels/car.glb"
                  cameraControls
                  touch-action="pan-y"
                  skybox-height="6" 
                  environmentImage="/enviroment/straight_afternoon_2k.hdr"
                  min-camera-orbit="auto auto 32m"
                  max-camera-orbit="auto auto 40m"
                  shadow-intensity="2"
                  disable-zoom="true"
                />
              </article>

              <article
                className="model-viewer-card project-card-link"
                onClick={() => window.location.href = '/ModelViewer_Lamp'}
              >
                <ModelViewer
                  src="/3dmodels/arabian_lamp.glb"
                  cameraControls
                  touch-action="pan-y"
                  skybox-height="6" 
                  environmentImage="/enviroment/straight_afternoon_2k.hdr"
                  min-camera-orbit="auto auto 20m"
                  max-camera-orbit="auto auto 30m"
                  shadow-intensity="2"
                  disable-zoom="true"
                />
              </article>

            </div>
          </div>
        </section>

        <section id="section3" className="projects2-section">
          <h3 className="projects2-section-title">Augmented Reality</h3>
          <p className="projects2-section-desc">Place your 3D models in the real world.</p>
          <div className="projects2-cards-row">
            <div className="models-viewer-container">

              <article
                className="model-viewer-card project-card-link"
                onClick={() => window.location.href = '/SimpleAR'}
                style={{ 
                  cursor: 'pointer', 
                  position: 'relative', 
                  flex: '1 1 45%', 
                  maxWidth: '45%',
                  minHeight: '300px',
                  height: '100%'
                }}
              >
              </article>

            </div>
          </div>
        </section>

      <Faq />
      <Footer1 />
      </main>
  );
};

export default Projects;
