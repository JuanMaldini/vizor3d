import { useCallback, useMemo } from "react";
import ReactPannellum from "react-pannellum";
import type { PannellumSetup } from "../../../types/PanoramasConfig/panellumConfig_SampleAI";

export default function PanellumSample({ setup }: { setup: PannellumSetup }) {
  const { id, firstSceneId, first, defaults } = setup;
  const firstConfig = useMemo(
    () => ({ ...(defaults || {}), ...(first?.config || {}) }),
    [defaults, first]
  );
  const firstImgSrc = first?.imageSource;

  const handlePanoramaLoaded = useCallback(() => {}, []);

  return (
    <ReactPannellum
      id={id}
      sceneId={firstSceneId}
      imageSource={firstImgSrc}
      config={firstConfig}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#000",
      }}
      onPanoramaLoaded={handlePanoramaLoaded}
    />
  );
}
