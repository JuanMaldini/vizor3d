import PanellumSample from './PanellumSample'
import { panellumConfig_SampleAI } from '../../../types/PanoramasConfig/panellumConfig_SampleAI' 
import ReactSidebar from '../../../components/PanelLateral/ReactSidebar';

export default function P_Sampleai() {
    return (
        <>
            <ReactSidebar
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
        </ReactSidebar>
        <PanellumSample setup={panellumConfig_SampleAI} />
      </>
    );
}