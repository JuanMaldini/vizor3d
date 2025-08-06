import { useEffect } from "react";

const Panorama = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `pannellum.viewer('panorama', {   
        "default": {
            "firstScene": "sample1",
            "sceneFadeDuration": 1000,
            "autoLoad": true,
            "showZoomCtrl": false,
            "autoRotate": -2,
        },
        "scenes": {
            "sample1": {
                "title": "",
                "pitch": -1.1195383276232724,
                "yaw": 43.568985506613785,
                "type": "equirectangular",
                "panorama": "/images/projects/Noiseless/1.jpg",
            }
        }
    });`;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="panorama" style={{ width: "100vw", height: "100vh" }} />;
};

export default Panorama;
