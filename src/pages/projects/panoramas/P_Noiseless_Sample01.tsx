import { useEffect } from "react";
import "../../../types/types";
import PanelLateral from "../../../components/PanelLateral/PanelLateral";

const Noiseless_Sample01 = () => {
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

    return (
        <PanelLateral
            mainText="Simple panel with project info: architects and the house, 3D artist collaboration, areas to explore, and focused aspects of the architecture."
            projectLines={[
                "Project",
                "Architect Example Studio",
                "Location Buenos Aires, AR",
                "Year 2025",
                "Type Single-family house",
            ]}
            sections={[
                {
                    title: 'Section 1',
                    lines: [
                        'information A',
                        'information B',
                        'information C',
                    ],
                },
            ]}
            selectors={[
                {
                    label: 'Materials',
                    categories: [
                        { name: 'Floor', items: ['Concrete Polished', 'Herringbone', 'Woodfloor'] },
                        { name: 'Walls', items: ['Wall Color 1', 'Wall Color 2', 'Wall Color 3'] },
                        { name: 'Skin', items: ['Skin 1', 'Skin 2', 'Skin 3'] },
                    ],
                },
                { label: 'Daytime', items: ['Night', 'Day'] },
                { label: 'Location', items: ['Hallway', 'Living', 'Kitchen', 'Room'] },
            ]}
            onSelect={({ group, category, item }) => {
                // simple example handler
                console.log('Selected:', { group, category, item });
            }}
        >
            <div id="panorama" />
        </PanelLateral>
    );
};

export default Noiseless_Sample01;
