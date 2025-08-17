import React from 'react';
import Faq from '../components/Faq';
import Footer1 from '../components/Footer1';
import { panellumConfig_SampleAI } from '../types/PanoramasConfig/panellumConfig_SampleAI';
import ProjectCard from '../components/ProjectCard';
import { panellumConfig_Noiseless_Sample01 } from '../types/PanoramasConfig/panellumConfig_Noiseless_Sample01';

const Home: React.FC = () => {
  return (
    <main className="main-content">

        <section className="hero-section">
            <ProjectCard
                title="Explore the World in 360°"
                description="Immerse yourself in unique experiences. Discover incredible places from the comfort of your home with our virtual tour technology."
                author=""
                setup={panellumConfig_Noiseless_Sample01}
                fullSection
                blackIntensity={0.2}
                blurIntensity={1}
            />
            <button className="btn btn-primary" style={{ position: 'absolute', zIndex: 500, translate: '0px 200px' }} onClick={() => window.location.href = "/projects"}>Projects</button>
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
      <Faq />
      <Footer1/>
      </main>
  );
};

export default Home;
