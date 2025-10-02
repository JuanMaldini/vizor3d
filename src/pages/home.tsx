import React from "react";
import Faq from "../components/Faq";
import Footer1 from "../components/Footer1";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  // Configuración inline para preview
  const panellumConfig_Noiseless_Sample01 = {
    id: "preview-noiseless-home",
    firstSceneId: "Noiseless_01",
    defaults: { autoLoad: true, showZoomCtrl: false, hfov: 100 },
    first: {
      imageSource: "/images/projects/Noiseless/1.jpg",
      config: { type: "equirectangular" as const, pitch: -1.12, yaw: 43.57 },
    },
  };

  return (
    <main className="main-content">
      <section className="hero-section">
        <ProjectCard
          title="Explore t-he World in 360°"
          description="Immerse yourself in unique experiences. Discover incredible places from the comfort of your home with our virtual tour technology."
          author=""
          setup={panellumConfig_Noiseless_Sample01}
          fullSection
          blackIntensity={0.3}
          blurIntensity={1}
        />
        <Link
          className="btn btn-primary"
          style={{ position: "absolute", zIndex: 500, translate: "0px 200px" }}
          to="/projects"
        >
          Projects
        </Link>
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
              <p>
                Interactive elements that enrich your exploration experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Footer1 />
    </main>
  );
};

export default Home;
