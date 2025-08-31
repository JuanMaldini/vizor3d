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
import { Link } from 'react-router-dom';

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
            <a className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center' }} onClick={() => document.getElementById('section1')?.scrollIntoView({ behavior: 'smooth' })}>
              Virtual Tour
            </a>
            <a className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center' }} onClick={() => document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth' })}>
              Model Viewer
            </a>
            <Link className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center' }} to="/Mindar_sample01">
              Augmented Reality
            </Link>
            {/* <Link className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center' }} to="/AR_Template">
              Augmented Reality
            </Link> */}
            
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
              author=""
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
                onClick={() => window.location.href = '/ModelViewer_Sample_Chair01'}
              >
                <ModelViewer
                  src="/3dmodels/chair.glb"
                  cameraControls
                  touch-action="pan-y"
                  skybox-height="6" 
                  environmentImage="/enviroment/straight_afternoon_2k.hdr"
                  min-camera-orbit="auto auto 15m"
                  max-camera-orbit="auto auto 20m"
                  shadow-intensity="2"
                  disable-zoom="true"
                />
              </article>

              <article
                className="model-viewer-card project-card-link"
                onClick={() => window.location.href = '/ModelViewer_Sample_Deco01'}
              >
                <ModelViewer
                  src="/3dmodels/plant_interior_decoration.glb"
                  cameraControls
                  touch-action="pan-y"
                  skybox-height="6" 
                  environmentImage="/enviroment/straight_afternoon_2k.hdr"
                  min-camera-orbit="auto auto 1.5m"
                  max-camera-orbit="auto auto 1.5m"
                  shadow-intensity="2"
                  disable-zoom="true"
                />
              </article>

              <article
                className="model-viewer-card project-card-link"
                onClick={() => window.location.href = '/ModelViewer_Sample_Car'}
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
                onClick={() => window.location.href = '/ModelViewer_Sample_Lamp'}
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


      <Faq />
      <Footer1 />
      </main>
  );
};

export default Projects;
