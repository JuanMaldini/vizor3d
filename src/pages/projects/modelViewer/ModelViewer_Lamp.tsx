import Footer from '../../../components/Footer';
import ModelViewer from '../../../components/ModelViewer';
import Navbar from '../../../components/Navbar';

function ModelViewer_Lamp() {
  return (
    <>
    <Navbar/>  
    <ModelViewer
      src="/3dmodels/arabian_lamp.glb"
      alt="A 3D model of a arabian lamp"
      touch-action="pan-y"
      cameraControls
      // disable-pan
      ar
      ar-modes="webxr scene-viewer quick-look"
      skybox-height="6" 
      camera-orbit="auto auto 50m"
      min-camera-orbit="auto 20deg 11m"
      max-camera-orbit="auto 160deg 50m" 
      environmentImage="/enviroment/straight_afternoon_2k.hdr"
      skybox-image="/enviroment/straight_afternoon_2k.hdr"
      field-of-view="70deg"
      shadow-intensity="2"
      style={{ width: '100%', height: '600px', margin: '0 auto' }}
    />
    <Footer/>
    </>
  );
}

export default ModelViewer_Lamp;