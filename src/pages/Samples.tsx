import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from './Projects';

const VirtualTour: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default VirtualTour;
