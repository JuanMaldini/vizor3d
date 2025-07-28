import Footer from '../../../components/Footer';
import ModelViewer from '../../../components/ModelViewer';
import Navbar from '../../../components/Navbar';

function ModelViewer_Lamp() {
  return (
    <ModelViewer
      src="/3dmodels/used_new_balance_574_classic.glb"
      alt="New Balance Classic"
      touch-action="pan-y"
      cameraControls
      // disable-pan
      ar
      ar-modes="webxr scene-viewer quick-look"
      skybox-height="6" 
      camera-orbit="auto auto 50m"
      min-camera-orbit="auto 20deg 4m"
      max-camera-orbit="auto 160deg 20m" 
      environmentImage="/enviroment/straight_afternoon_2k.hdr"
      field-of-view="50deg"
      shadow-intensity="1"
      style={{ width: '100%', height: '600px', margin: '0 auto' }}
    />
  );
}

export default ModelViewer_Lamp;