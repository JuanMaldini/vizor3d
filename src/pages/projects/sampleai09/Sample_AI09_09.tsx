import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";
import render from "/images/projects/Sampleai09/Sample_AI09_09.jpg";

const Sample_AI09_09 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState();
    const [pitch, setPitch] = useState();
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch: -17.620729859395748,
            yaw: -37.58376719775619,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -27.636903609666927,
            yaw: -7.5519614412622795,
            navigate: "/Sampleai_02",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -15.947504283700706,
            yaw: -55.468526191535,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -12.533678648129888,
            yaw: -64.2978640805966,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -12.986830038576985,
            yaw: -106.68635419388208,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -15.515865409406528,
            yaw: -73.06478792983197,
            navigate: "/Sampleai_06",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch: -22.445093176570886,
            yaw: -119.69140424465037,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch:  -39.85751604757657,
            yaw: -162.5179985376181,
            navigate: "/Sampleai_08",
        },
    ]);
    const panImage = useRef<any>(null);

    return (
        <div>
            <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
            </div>
            <Pannellum
                width='100%'
                height='84vh'
                image={render}
                pitch={0}
                yaw={0}
                hfov={90}
                // autoRotate={-2}
                autoLoad
                // compass
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
        </div>
    )
}

export default Sample_AI09_09;