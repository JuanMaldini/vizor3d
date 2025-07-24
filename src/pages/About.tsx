import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <section className="about-section">
          <div className="about-container">
            <h1 className="about-title">About Vizor 3D</h1>
            <p className="about-description">
              Vizor 3D is dedicated to creating immersive virtual tours and interactive experiences.
              Our mission is to bring the world closer to you through innovative technology.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
