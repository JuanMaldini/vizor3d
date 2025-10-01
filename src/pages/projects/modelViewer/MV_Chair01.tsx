import ModelViewer from "../../../components/ModelViewer";

function MV_Chair01() {
  return (
    <ModelViewer
      src="/3dmodels/chair.glb"
      alt="A 3D model of a car"
      touch-action="pan-y"
      cameraControls
      // disable-pan
      ar
      ar-scale="fixed"
      ar-modes="webxr scene-viewer quick-look"
      xr-environment
      skybox-height="6"
      camera-orbit="auto auto 50m"
      min-camera-orbit="auto 20deg 5m"
      max-camera-orbit="auto 160deg 15m"
      // environmentImage="/enviroment/straight_afternoon_2k.hdr"
      // skybox-image="/enviroment/straight_afternoon_2k.hdr"
      field-of-view="50deg"
      shadow-intensity={2}
      style={{ width: "100%", height: "600px", margin: "0 auto" }}
    />
  );
}
export default MV_Chair01;
