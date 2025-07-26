import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";

import { selectResponsiveImage } from "../../../components/functions";

import Navbar from "../../../components/Navbar";

const RSample = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [hotspots] = useState([
        {
            name: "",
            type: "",
            pitch: 0,
            yaw: 0,
            navigate: "",
        }
        
    ]);
    const panImage = useRef<any>(null);

    // Define aquí las rutas de tus imágenes
    const lowRes = require("../../../images/projects/RSample/1.jpg");
    const highRes = require("../../../images/projects/sampleai09/Sample_AI09_01.jpg");
    const imageToUse = selectResponsiveImage(lowRes, highRes, 900);

    return (
        <>
        <Navbar />

        <style>{`
            .pnlm-about-msg {
                display: none !important;
            }
        `}</style>
        
        <div>
            <Pannellum
                width='100%'
                height='100vh'
                image={imageToUse}
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

export default RSample;