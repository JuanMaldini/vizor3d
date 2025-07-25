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
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -40,
            yaw: -83,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -19.02507533822296,
            yaw: -154.76473301441618,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -47.8310697985946,
            yaw: 169.01358570131745,
            navigate: "/Sampleai_06",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch: -16.912169045298757,
            yaw: 167.201410333578,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch: -16.091680957318797,
            yaw: 137.54499892899565,
            navigate: "/Sampleai_08",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch: -12.091947020653173,
            yaw: 121.96174179271367,
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