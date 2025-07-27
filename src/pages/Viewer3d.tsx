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
          touch-action="pan-y"
          cameraControls
          disable-pan
          ar
          ar-modes="webxr scene-viewer quick-look"
          skybox-height="6" 
          camera-orbit="auto auto 50m"
          min-camera-orbit="auto 20deg 10m"
          max-camera-orbit="auto 90deg 30m" 
          environmentImage="/enviroment/straight_afternoon_2k.hdr"
          skybox-image="/enviroment/straight_afternoon_2k.hdr"
          field-of-view="70deg"
          shadow-intensity="2"
          style={{ width: '100%', height: '600px', margin: '0 auto' }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Viewer3d;