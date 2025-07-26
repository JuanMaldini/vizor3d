import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";

import render from "../../../images/projects/sampleai09/Sample_AI09_05.jpg";
import Navbar from "../../../components/Navbar";

const Sample_AI09_05 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch: -17.36874125533316,
            yaw: 40.28816438988322,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -13.18578139862265,
            yaw: 52.53304877938946,
            navigate: "/Sampleai_02",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -20.124284707485618,
            yaw: 20.018597248567815,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -21.183348165899343,
            yaw: -6.427350792947299,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -29.522495115816653,
            yaw:  40.745006906348195,
            navigate: "/Sampleai_06",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch: -33.3487823908823,
            yaw:  104.50636072608798,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch: -16.54278648905028,
            yaw:  96.86297950518878,
            navigate: "/Sampleai_08",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch: -14.189714973171053,
            yaw:  79.9568347627397,
            navigate: "/Sampleai_09",
        }
        
    ]);
    const panImage = useRef<any>(null);

    return (
        <>
        <Navbar />
                        
        <style>{`
            .pnlm-about-msg {
                display: none !important;
            }
        `}</style>
        
        <div>
            <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
            </div>
            <Pannellum
                width='100%'
                height='100vh'
                image={render}
                pitch={10}
                yaw={180}
                hfov={110}
                autoRotate={-2}
                autoLoad
                compass
                disableKeyboardCtrl
                // @ts-ignore
                ref={panImage}
                onMouseup={(event: any) => {
                    setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
                    setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
                } }
            >
                {hotspots.map((hotspot, idx) => {
                    const { name, type, pitch, yaw } = hotspot;
                    return (
                        <Pannellum.Hotspot
                            name={name}
                            // @ts-ignore
                            type={type}
                            pitch={pitch}
                            yaw={yaw}
                            handleClick={() => type === 'custom' && startTransition(() => navigate(hotspot.navigate) as void)}
                            text={name}
                            key={idx} />
                    );
                })}
            </Pannellum>
        </div></>
    )
}

export default Sample_AI09_05;