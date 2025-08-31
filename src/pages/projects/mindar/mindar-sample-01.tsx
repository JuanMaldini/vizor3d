import React, { useEffect, useRef } from "react";

// Local JSX typings for A-Frame tags (keeps this file self-contained)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": any;
      "a-assets": any;
      "a-asset-item": any;
      "a-entity": any;
      "a-camera": any;
      "a-gltf-model": any;
      "a-box": any;
    }
  }
}

const MindarSample01: React.FC = () => {
  const sceneRef = useRef<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const modelRef = useRef<HTMLElement | null>(null);
  const assetRef = useRef<HTMLElement | null>(null);
  const boxRef = useRef<HTMLElement | null>(null);

  // Scene lifecycle + MindAR events
  useEffect(() => {
    const sceneEl = sceneRef.current as any;
    if (!sceneEl) return;
    const logCanvasSize = (where: string) => {
      try {
        const canvas: HTMLCanvasElement | undefined = sceneEl.renderer?.domElement || sceneEl.canvas;
        if (canvas) {
          console.log(
            `[MindAR] ${where} canvas size`,
            { width: canvas.width, height: canvas.height, clientW: canvas.clientWidth, clientH: canvas.clientHeight }
          );
        } else {
          console.log(`[MindAR] ${where} canvas missing`);
        }
      } catch (e) {
        console.log(`[MindAR] ${where} canvas size error`, e);
      }
    };
    const logVideoSize = (where: string) => {
      try {
        const video = document.querySelector("video") as HTMLVideoElement | null;
        if (video) {
          console.log(
            `[MindAR] ${where} video size`,
            { videoW: video.videoWidth, videoH: video.videoHeight, clientW: video.clientWidth, clientH: video.clientHeight }
          );
        } else {
          console.log(`[MindAR] ${where} video not found`);
        }
      } catch (e) {
        console.log(`[MindAR] ${where} video size error`, e);
      }
    };

    const onSceneLoaded = () => {
      console.log("[MindAR] a-scene loaded");
      logCanvasSize("loaded");
    };
    const onARReady = () => {
      console.log("[MindAR] arReady (camera started)");
      logCanvasSize("arReady");
      // Delay a bit to let the video attach and size
      setTimeout(() => logVideoSize("arReady+100ms"), 100);
    };
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

  // Anchor tracking
  useEffect(() => {
    const anchorEl = anchorRef.current as any;
    if (!anchorEl) return;
    const onFound = () => console.log("[MindAR] targetFound");
    const onLost = () => console.log("[MindAR] targetLost");
    anchorEl.addEventListener("targetFound", onFound);
    anchorEl.addEventListener("targetLost", onLost);
    // Force-visibility toggles as a safety net
    const onFoundShow = () => {
      const m = modelRef.current as any;
      const b = boxRef.current as any;
      if (m) m.setAttribute("visible", true);
      if (b) b.setAttribute("visible", true);
      console.log("[MindAR] forced visible on children");
    };
    const onLostHide = () => {
      const m = modelRef.current as any;
      const b = boxRef.current as any;
      if (m) m.setAttribute("visible", false);
      if (b) b.setAttribute("visible", false);
      console.log("[MindAR] forced hidden on children");
    };
    anchorEl.addEventListener("targetFound", onFoundShow);
    anchorEl.addEventListener("targetLost", onLostHide);
    return () => {
      anchorEl.removeEventListener("targetFound", onFound);
      anchorEl.removeEventListener("targetLost", onLost);
      anchorEl.removeEventListener("targetFound", onFoundShow);
      anchorEl.removeEventListener("targetLost", onLostHide);
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
    const onModelLoaded = () => {
      console.log("[MindAR] model-loaded");
      try {
        const obj: any = modelEl.getObject3D("mesh");
        console.log("[MindAR] mesh present:", !!obj, "children:", obj?.children?.length ?? "n/a");
      } catch {}
    };
    const onModelError = (e: any) =>
      console.log("[MindAR] model-error", e?.detail || e);
    modelEl.addEventListener("model-loaded", onModelLoaded);
    modelEl.addEventListener("model-error", onModelError);
    // Quick bbox metrics for visibility debugging
    modelEl.addEventListener("model-loaded", () => {
      try {
        const THREE = (window as any).THREE || (window as any).AFRAME?.THREE;
        const obj: any = modelEl.getObject3D("mesh");
        if (THREE && obj) {
          obj.updateWorldMatrix(true, true);
          const box = new THREE.Box3().setFromObject(obj);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          box.getSize(size);
          box.getCenter(center);
          console.log(
            "[MindAR] model bbox size",
            size.toArray(),
            "center",
            center.toArray()
          );
        }
      } catch {}
    });
    return () => {
      modelEl.removeEventListener("model-loaded", onModelLoaded);
      modelEl.removeEventListener("model-error", onModelError);
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef as any}
      embedded
  style={{ width: "100%", height: "100vh", display: "block" }}
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

      {/* Luces mínimas para asegurar visibilidad del GLTF */}
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
        ></a-gltf-model>
        <a-box
          ref={boxRef as any}
          color="red"
        ></a-box>
      </a-entity>
    </a-scene>
  );
};

export default MindarSample01;
