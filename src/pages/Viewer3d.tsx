import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Viewer3d = () => {

  return (
    <div>
      <Navbar />

<<<<<<< Updated upstream
      <model-viewer
=======
      <ModelViewer
>>>>>>> Stashed changes
        src="/3dmodels/car.glb"
        alt="Modelo 3D"
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '500px' }}
        camera-controls touch-action="pan-y"
        shadow-intensity="1"
      ></ModelViewer>

      <Footer />
    </div>
  );
};

export default Viewer3d;