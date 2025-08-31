import React from "react";

type Props = {
  targetSrc?: string; // path to .mind (e.g., /mindar/targets.mind)
  modelSrc?: string; // path to glb (e.g., /3dmodels/dry_flower.glb)
  position?: string; // default "0 0 0"
  rotation?: string; // default "0 0 0"
  scale?: string; // default "0.2 0.2 0.2"
  showUI?: boolean; // show MindAR UI (loading/scanning/error)
};

const MindarViewer: React.FC<Props> = ({
  targetSrc = "/mindar/targets.mind",
  modelSrc = "/3dmodels/plant_interior_decoration.glb",
  position = "0 0 0",
  rotation = "0 0 0",
  scale = "0.2 0.2 0.2",
  showUI = true,
}) => {
  const ui = showUI ? "yes" : "no";
  return (
    <a-scene
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights: true"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
      mindar-image={`imageTargetSrc: ${targetSrc}; uiLoading: ${ui}; uiScanning: ${ui}; uiError: ${ui}; autoStart: true;`}
    >
      <a-assets>
        <a-asset-item id="mv-model" src={modelSrc}></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-light type="ambient" intensity="0.8"></a-light>
        <a-light type="directional" intensity="0.9" position="1 2 1"></a-light>
        <a-gltf-model
          src="#mv-model"
          position={position}
          rotation={rotation}
          scale={scale}
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default MindarViewer;
