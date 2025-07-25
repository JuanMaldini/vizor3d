import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Viewer3d.css';

import '@google/model-viewer';

const Viewer3d = () => {

  return (
    <div>
      <Navbar />

      <model-viewer

        src="/3dmodels/car.glb"
        alt="Modelo 3D"
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '500px' }}
        touch-action="pan-y"
        shadow-intensity="1"
      ></model-viewer>

      <Footer />
    </div>
  );
};

export default Viewer3d;