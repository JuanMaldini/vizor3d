import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";

import render from "../../../images/projects/sampleai09/Sample_AI09_03.png";
import Navbar from "../../../components/Navbar";

const Sample_AI09_03 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch: -39.85,
            yaw: 78.85,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -20.5,
            yaw: 82.8,
            navigate: "/Sampleai_02",
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
                //compass
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

export default Sample_AI09_03;