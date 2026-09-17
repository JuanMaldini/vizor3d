import { asset } from "../../../components/functions";
import React, { useEffect, useRef } from "react";

// Local JSX typings for A-Frame tags (self-contained)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": any;
      "a-assets": any;
      "a-asset-item": any;
      "a-entity": any;
      "a-camera": any;
      "a-gltf-model": any;
    }
  }
}

type MindarViewerProps = {
  modelSrc: string; // public path to glb
  modelPosition?: string; // e.g. "0 0 0"
  modelRotation?: string; // e.g. "0 0 0"
  modelScale?: string; // e.g. "1 1 1"
  imageTargetSrc?: string; // defaults to /mindar/targets.mind
  targetIndex?: number; // defaults to 0
};

const MindarViewer: React.FC<MindarViewerProps> = ({
  modelSrc,
  modelPosition,
  modelRotation,
  modelScale,
  imageTargetSrc = asset("mindar/targets.mind"),
  targetIndex = 0,
}) => {
  const sceneRef = useRef<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const modelRef = useRef<HTMLElement | null>(null);
  const assetRef = useRef<HTMLElement | null>(null);

  // Scene lifecycle + MindAR events
  useEffect(() => {
    const sceneEl = sceneRef.current as any;
    if (!sceneEl) return;
    const logCanvasSize = (where: string) => {
      try {
        const canvas: HTMLCanvasElement | undefined =
          sceneEl.renderer?.domElement || sceneEl.canvas;
        if (canvas) {
          console.log(`[MindAR] ${where} canvas size`, {
            width: canvas.width,
            height: canvas.height,
            clientW: canvas.clientWidth,
            clientH: canvas.clientHeight,
          });
        } else {
          console.log(`[MindAR] ${where} canvas missing`);
        }
      } catch (e) {
        console.log(`[MindAR] ${where} canvas size error`, e);
      }
    };
    const logVideoSize = (where: string) => {
      try {
        const video = document.querySelector(
          "video"
        ) as HTMLVideoElement | null;
        if (video) {
          console.log(`[MindAR] ${where} video size`, {
            videoW: video.videoWidth,
            videoH: video.videoHeight,
            clientW: video.clientWidth,
            clientH: video.clientHeight,
          });
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
      setTimeout(() => logVideoSize("arReady+100ms"), 100);
    };
    const onARError = (e: any) =>
      console.log("[MindAR] arError", e?.detail || e);
    sceneEl.addEventListener("loaded", onSceneLoaded);
    sceneEl.addEventListener("arReady", onARReady);
    sceneEl.addEventListener("arError", onARError);

    // Constrain MindAR UI/Video/Canvas to container instead of full page
    const containerEl =
      (sceneRef.current as HTMLElement | null)?.parentElement || undefined;
    const fitToContainer = (el: HTMLElement, z = 1) => {
      el.style.position = "absolute";
      (el.style as any).inset = "0"; // TS: not all browsers; fine here
      el.style.top = "0";
      el.style.left = "0";
      el.style.width = "100%";
      el.style.height = "100%";
      (el as any).style.objectFit =
        (el as any).tagName === "VIDEO" ? "cover" : "contain";
      el.style.zIndex = String(z);
    };
    const anchorIntoContainer = (el: HTMLElement, zIndex = 1) => {
      if (!containerEl || !el) return;
      try {
        if ((el as any).dataset?.vzAnchored === "1") return;
        fitToContainer(el, zIndex);
        containerEl.appendChild(el);
        (el as any).dataset.vzAnchored = "1";
      } catch {}
    };
    const moveMindarNodesIntoContainer = () => {
      if (!containerEl) return false;
      let moved = 0;
      const selectors = [
        // MindAR overlay UI
        ".mindar-ui-overlay",
        "#mindar-ui",
        "[class*='mindar-ui']",
        // MindAR video/canvas/backdrop
        "video[id*='mindar']",
        "video[class*='mindar']",
        "canvas[id*='mindar']",
        "canvas[class*='mindar']",
        "div[id*='mindar']",
        "div[class*='mindar']",
      ];
      const nodes = document.querySelectorAll<HTMLElement>(selectors.join(","));
      nodes.forEach((node) => {
        // UI overlay on top
        if (node.id === "mindar-ui" || node.className.includes("mindar-ui")) {
          node.style.pointerEvents = "auto";
          anchorIntoContainer(node, 3);
          moved++;
          return;
        }
        // Canvas above video, below UI
        if (node.tagName === "CANVAS") {
          anchorIntoContainer(node, 2);
          moved++;
          return;
        }
        // Video at the bottom layer
        if (node.tagName === "VIDEO") {
          anchorIntoContainer(node, 1);
          moved++;
          return;
        }
        // Any other mindar wrappers
        anchorIntoContainer(node, 1);
        moved++;
      });
      return moved > 0;
    };

    // If overlay already exists, move it; else observe for it
    // Attempt immediate reparenting of MindAR nodes
    moveMindarNodesIntoContainer();
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of Array.from(m.addedNodes)) {
          if (!(node instanceof HTMLElement)) continue;
          const hasMindar =
            node.matches?.("[id*='mindar'], [class*='mindar']") ||
            !!node.querySelector?.("[id*='mindar'], [class*='mindar']");
          if (hasMindar) moveMindarNodesIntoContainer();
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      sceneEl.removeEventListener("loaded", onSceneLoaded);
      sceneEl.removeEventListener("arReady", onARReady);
      sceneEl.removeEventListener("arError", onARError);
      observer.disconnect();
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
    // Force-visibility toggles for model
    const onFoundShow = () => {
      const m = modelRef.current as any;
      if (m) m.setAttribute("visible", true);
      console.log("[MindAR] forced visible on model");
    };
    const onLostHide = () => {
      const m = modelRef.current as any;
      if (m) m.setAttribute("visible", false);
      console.log("[MindAR] forced hidden on model");
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
        console.log("[MindAR] asset loaded", modelSrc);
      assetEl.addEventListener("loaded", onAssetLoaded);
      return () => assetEl.removeEventListener("loaded", onAssetLoaded);
    }
  }, [modelSrc]);

  useEffect(() => {
    const modelEl = modelRef.current as any;
    if (!modelEl) return;
    const onModelLoaded = () => {
      console.log("[MindAR] model-loaded");
      try {
        const obj: any = modelEl.getObject3D("mesh");
        console.log(
          "[MindAR] mesh present:",
          !!obj,
          "children:",
          obj?.children?.length ?? "n/a"
        );
      } catch {}
    };
    const onModelError = (e: any) =>
      console.log("[MindAR] model-error", e?.detail || e);
    modelEl.addEventListener("model-loaded", onModelLoaded);
    modelEl.addEventListener("model-error", onModelError);
    // Quick bbox metrics
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

  // Minimal cleanup on unmount: stop AR, pause scene, stop camera, remove MindAR overlays
  useEffect(() => {
    return () => {
      const sceneEl = sceneRef.current as any;
      console.log("[MindAR] cleanup: stopping AR and removing overlays");
      try {
        const arSystem =
          sceneEl?.systems?.["mindar-image-system"] ||
          sceneEl?.systems?.["mindar-image"];
        arSystem?.stop?.();
        console.log("[MindAR] arSystem.stop() called");
      } catch (e) {
        console.log("[MindAR] cleanup arSystem error", e);
      }
      try {
        sceneEl?.pause?.();
      } catch (e) {
        console.log("[MindAR] cleanup scene pause error", e);
      }
      try {
        const videos = Array.from(
          document.querySelectorAll("video")
        ) as HTMLVideoElement[];
        videos.forEach((v) => {
          const stream = v.srcObject as MediaStream | null;
          stream?.getTracks?.().forEach((t) => t.stop());
          v.srcObject = null as any;
          v.removeAttribute("src");
          v.load?.();
        });
        if (videos.length) console.log("[MindAR] camera tracks stopped");
      } catch (e) {
        console.log("[MindAR] cleanup camera error", e);
      }
      try {
        const overlays = Array.from(
          document.querySelectorAll('[class*="mindar"], [id*="mindar"]')
        ) as HTMLElement[];
        overlays.forEach((el) => (el.style.display = "none"));
        overlays.forEach((el) => el.parentElement?.removeChild(el));
        if (overlays.length)
          console.log("[MindAR] overlays removed:", overlays.length);
      } catch (e) {
        console.log("[MindAR] cleanup overlays error", e);
      }
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef as any}
      embedded
      style={{ width: "100%", height: "100%", display: "block" }}
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights: true"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
      mindar-image={`imageTargetSrc: ${imageTargetSrc}; autoStart: true;`}
    >
      <a-assets>
        <a-asset-item
          id="mv-model"
          src={modelSrc}
          ref={assetRef as any}
        ></a-asset-item>
      </a-assets>

      <a-entity light="type: ambient; intensity: 0.8"></a-entity>
      <a-entity
        light="type: directional; intensity: 0.6"
        position="0 1 0"
      ></a-entity>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity
        mindar-image-target={`targetIndex: ${targetIndex}`}
        ref={anchorRef as any}
      >
        <a-gltf-model
          src="#mv-model"
          ref={modelRef as any}
          {...(modelPosition ? { position: modelPosition } : {})}
          {...(modelRotation ? { rotation: modelRotation } : {})}
          {...(modelScale ? { scale: modelScale } : {})}
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default MindarViewer;
