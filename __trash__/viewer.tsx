import React, { useEffect, useRef } from "react";

type Props = {
  targetSrc: string;
  modelSrc: string;
  position?: string;
  rotation?: string;
  scale?: string;
  showUI?: boolean;
  // MindAR tuning (optional)
  filterMinCF?: number;
  filterBeta?: number;
  missTolerance?: number;
  warmupTolerance?: number;
  maxTrack?: number;
  // Model normalization (optional)
  normalizeModel?: boolean;
  normalizedSize?: number;
  centerModel?: boolean;
  groundModel?: boolean;
};

const Viewer: React.FC<Props> = ({
  targetSrc,
  modelSrc,
  position,
  rotation,
  scale,
  showUI,
  filterMinCF = 0.0005,
  filterBeta = 0.001,
  missTolerance = 5,
  warmupTolerance = 5,
  maxTrack = 1,
  normalizeModel = true,
  normalizedSize = 0.15,
  centerModel = true,
  groundModel = true,
}) => {
  const ui = showUI === false ? "no" : "yes";
  const sceneRef = useRef<HTMLElement | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const modelRef = useRef<HTMLElement | null>(null);
  const assetRef = useRef<HTMLElement | null>(null);

  // Debug props
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[MindAR] props", {
      targetSrc,
      modelSrc,
      position,
      rotation,
      scale,
      showUI,
      filterMinCF,
      filterBeta,
      missTolerance,
      warmupTolerance,
      maxTrack,
      normalizeModel,
      normalizedSize,
      centerModel,
      groundModel,
    });
  }, [
    targetSrc,
    modelSrc,
    position,
    rotation,
    scale,
    showUI,
    filterMinCF,
    filterBeta,
    missTolerance,
    warmupTolerance,
    maxTrack,
    normalizeModel,
    normalizedSize,
    centerModel,
    groundModel,
  ]);

  // Scene events
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

  // Target events
  useEffect(() => {
    const targetEl = targetRef.current as any;
    if (!targetEl) return;
    const onFound = () => console.log("[MindAR] targetFound");
    const onLost = () => console.log("[MindAR] targetLost");
    targetEl.addEventListener("targetFound", onFound);
    targetEl.addEventListener("targetLost", onLost);
    return () => {
      targetEl.removeEventListener("targetFound", onFound);
      targetEl.removeEventListener("targetLost", onLost);
    };
  }, []);

  // Asset load log
  useEffect(() => {
    const assetEl = assetRef.current as any;
    if (!assetEl) return;
    const onAssetLoaded = () =>
      console.log("[MindAR] asset item loaded", modelSrc);
    assetEl.addEventListener("loaded", onAssetLoaded);
    return () => assetEl.removeEventListener("loaded", onAssetLoaded);
  }, [modelSrc]);

  // Model normalization on load
  useEffect(() => {
    const modelEl = modelRef.current as any;
    if (!modelEl) return;
    const onModelLoaded = () => {
      console.log("[MindAR] model-loaded", modelSrc);
      try {
        if (!normalizeModel) return;
        const THREE = (window as any).THREE || (window as any).AFRAME?.THREE;
        if (!THREE) return;
        const obj: any = modelEl.getObject3D("mesh");
        if (!obj) return;
        requestAnimationFrame(() => {
          try {
            obj.updateWorldMatrix(true, true);
            const computeBox = () => {
              const merged = new THREE.Box3();
              let has = false;
              obj.traverse((child: any) => {
                if (child && child.isMesh && child.geometry) {
                  const geom = child.geometry;
                  if (!geom.boundingBox) geom.computeBoundingBox();
                  if (geom.boundingBox) {
                    const gbox = geom.boundingBox.clone();
                    gbox.applyMatrix4(child.matrixWorld);
                    if (!has) {
                      merged.copy(gbox);
                      has = true;
                    } else {
                      merged.union(gbox);
                    }
                  }
                }
              });
              return has ? merged : null;
            };

            let box = computeBox();
            if (!box) {
              console.log("[MindAR] normalize skipped: no mesh geometry found");
              return;
            }
            const size = new THREE.Vector3();
            const center = new THREE.Vector3();
            box.getSize(size);
            box.getCenter(center);
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            const target = normalizedSize > 0 ? normalizedSize : 0.15;
            const scaleUniform = target / maxDim;
            console.log(
              "[MindAR] bbox size",
              size.toArray(),
              "center",
              center.toArray(),
              "uniformScale",
              scaleUniform
            );

            // Uniform scale at root
            const s = modelEl.object3D.scale;
            s.set(s.x * scaleUniform, s.y * scaleUniform, s.z * scaleUniform);

            // Recompute after scaling
            obj.updateWorldMatrix(true, true);
            box = computeBox();
            if (!box) return;
            box.getSize(size);
            box.getCenter(center);

            // Center and ground via root translation
            const p = modelEl.object3D.position;
            if (centerModel) {
              p.x += -center.x;
              p.z += -center.z;
            }
            if (groundModel) {
              const raise = -box.min.y;
              p.y += raise;
            }
            if (p.y < 0.001) p.y = 0.001;
            modelEl.object3D.matrixNeedsUpdate = true;
          } catch (err) {
            console.log("[MindAR] normalize error (inner)", err);
          }
        });
      } catch (err) {
        console.log("[MindAR] normalize error", err);
      }
    };
    const onModelError = (e: any) =>
      console.log("[MindAR] model-error", e?.detail || e);
    modelEl.addEventListener("model-loaded", onModelLoaded);
    modelEl.addEventListener("model-error", onModelError);
    return () => {
      modelEl.removeEventListener("model-loaded", onModelLoaded);
      modelEl.removeEventListener("model-error", onModelError);
    };
  }, [modelSrc, normalizeModel, normalizedSize, centerModel, groundModel]);

  return (
    <a-scene
      ref={sceneRef as any}
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights: true"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
      mindar-image={`imageTargetSrc: ${targetSrc}; uiLoading: ${ui}; uiScanning: ${ui}; uiError: ${ui}; autoStart: true; filterMinCF: ${filterMinCF}; filterBeta: ${filterBeta}; missTolerance: ${missTolerance}; warmupTolerance: ${warmupTolerance}; maxTrack: ${maxTrack};`}
    >
      <a-assets>
        <a-asset-item
          id="mv-model"
          src={modelSrc}
          ref={assetRef as any}
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0" ref={targetRef as any}>
        <a-gltf-model
          src="#mv-model"
          ref={modelRef as any}
          position={position}
          rotation={rotation}
          scale={scale}
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default Viewer;
