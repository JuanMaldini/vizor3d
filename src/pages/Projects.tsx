import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';
import RSample from '../images/projects/RSample/1.jpg';
import Sampleai_01 from '../images/projects/sampleai09/Sample_AI09_01.jpg';
import ModelViewer from '../components/ModelViewer';
import '../styles/App.css';
import Faq from '../components/Faq';
import Footer1 from '../components/Footer1';

// import imglamp from '../../public/Icons/img-lamp.png';

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
          </div>
        </section>

        <section id="section1" className="projects2-section">
          <h3 className="projects2-section-title">Virtual Tour</h3>
          <p className="projects2-section-desc">Explore your 3D spaces by 360° images </p>
          <div className="projects2-cards-row">
                <ProjectCard
                  title="360 Saloon"
                  description="Explore interiors in 360°"
                  author="Rodrigo"
                  // seeMoreLink="https://www.google.com"
                  redirectPath="/rsample"
                  image={RSample}
                />
                <ProjectCard
                  title="360 Virtual Tour"
                  description="Explore the world in 360°"
                  author="Sample"
                  redirectPath="/sampleai_01"
                  image={Sampleai_01}
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
                onClick={() => window.location.href = '/modelviewercar'}
                style={{ cursor: 'pointer', position: 'relative', flex: '1 1 45%', maxWidth: '45%' }}
              >
                <ModelViewer
                  src="/3dmodels/car.glb"
                  cameraControls
                  touch-action="pan-y"
                  ar-="webxr scene-viewer quick-look"
                  skybox-height="6" 
                  environmentImage="/enviroment/straight_afternoon_2k.hdr"
                  field-of-view="110deg"
                  shadow-intensity="2"
                />
              </article>

              <article
                className="model-viewer-card project-card-link"
                onClick={() => window.location.href = '/modelviewerlamp'}
                style={{ cursor: 'pointer', position: 'relative', flex: '1 1 45%', maxWidth: '45%' }}
              >
                <ModelViewer
                  src="/3dmodels/arabian_lamp.glb"
                  cameraControls
                  touch-action="pan-y"
                  ar-="webxr scene-viewer quick-look"
                  skybox-height="6" 
                  environmentImage="/enviroment/straight_afternoon_2k.hdr"
                  field-of-view="110deg"
                  shadow-intensity="2"
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
