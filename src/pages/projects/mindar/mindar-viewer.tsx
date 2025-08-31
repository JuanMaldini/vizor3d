import React, { useEffect, useRef } from "react";

const MindarViewer: React.FC = () => {
  const sceneRef = useRef<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const modelRef = useRef<HTMLElement | null>(null);
  const assetRef = useRef<HTMLElement | null>(null);

  // Scene + MindAR lifecycle logs
  useEffect(() => {
    const sceneEl = sceneRef.current as any;
    if (!sceneEl) return;
    const onSceneLoaded = () => console.log("[MindAR] a-scene loaded");
    const onARReady = () => console.log("[MindAR] arReady (camera started)");
    const onARError = (e: any) =>
      console.log("[MindAR] arError", e?.detail || e);
    sceneEl.addEventListener("loaded", onSceneLoaded);
    sceneEl.addEventListener("arReady", onARReady);
    sceneEl.addEventListener("arError", onARError);
    return () => {
      sceneEl.removeEventListener("loaded", onSceneLoaded);
      sceneEl.removeEventListener("arReady", onARReady);
      sceneEl.removeEventListener("arError", onARError);
    };
  }, []);

  // Anchor tracking logs
  useEffect(() => {
    const anchorEl = anchorRef.current as any;
    if (!anchorEl) return;
    const onFound = () => console.log("[MindAR] targetFound");
    const onLost = () => console.log("[MindAR] targetLost");
    anchorEl.addEventListener("targetFound", onFound);
    anchorEl.addEventListener("targetLost", onLost);
    return () => {
      anchorEl.removeEventListener("targetFound", onFound);
      anchorEl.removeEventListener("targetLost", onLost);
    };
  }, []);

  // Asset/model logs
  useEffect(() => {
    const assetEl = assetRef.current as any;
    if (assetEl) {
      const onAssetLoaded = () =>
        console.log("[MindAR] asset loaded /3dmodels/arabian_lamp.glb");
      assetEl.addEventListener("loaded", onAssetLoaded);
      return () => assetEl.removeEventListener("loaded", onAssetLoaded);
    }
  }, []);

  useEffect(() => {
    const modelEl = modelRef.current as any;
    if (!modelEl) return;
    const onModelLoaded = () => console.log("[MindAR] model-loaded");
    const onModelError = (e: any) =>
      console.log("[MindAR] model-error", e?.detail || e);
    modelEl.addEventListener("model-loaded", onModelLoaded);
    modelEl.addEventListener("model-error", onModelError);
    return () => {
      modelEl.removeEventListener("model-loaded", onModelLoaded);
      modelEl.removeEventListener("model-error", onModelError);
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef as any}
      embedded
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights: true"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
      mindar-image="imageTargetSrc: /mindar/targets.mind; autoStart: true;"
    >
      <a-assets>
        <a-asset-item
          id="mv-model"
          src="/3dmodels/arabian_lamp.glb"
          ref={assetRef as any}
        ></a-asset-item>
      </a-assets>

      {/* Small lights so the GLTF is visible */}
      <a-entity light="type: ambient; intensity: 0.8"></a-entity>
      <a-entity
        light="type: directional; intensity: 0.6"
        position="0 1 0"
      ></a-entity>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0" ref={anchorRef as any}>
        <a-gltf-model
          src="#mv-model"
          ref={modelRef as any}
          scale="0.2 0.2 0.2"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default MindarViewer;
