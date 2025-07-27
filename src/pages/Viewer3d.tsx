import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModelViewer from '../components/ModelViewer'

function Viewer3d() {

  return (
    <div>
      <Navbar />
      <main>
        <ModelViewer
          src="/3dmodels/car.glb"
          alt="A 3D model of a car"
          autoRotate
          cameraControls
          ar
          shadow-intensity="1"
          environmentImage="neutral"
          backgroundColor="#ffffff"
          style={{ width: '100%', height: '600px', margin: '0 auto' }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Viewer3d;