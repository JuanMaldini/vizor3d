import { startTransition, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Pannellum } from "pannellum-react";
import render from "../../../images/projects/sampleai09/Sample_AI09_02.jpg";

const Sample_AI09_02 = () => {
    let navigate = useNavigate();
    const [pitch, setPitch] = useState();
    const [yaw, setYaw] = useState();
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch: -39.85,
            yaw: -78.85,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -22.5,
            yaw: -84.7,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -14.83,
            yaw: -86.13,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -9.8487250459484,
            yaw: -127.16599392678768,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -21.694775034377916,
            yaw: -108.21319395489375,
            navigate: "/Sampleai_06",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch:  -17.249935247456012,
            yaw: -148.00223758910363,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch:  -21.483661654666783,
            yaw: 178.4830489771014,
            navigate: "/Sampleai_08",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch:  -33.211903121259084,
            yaw: 168.61775631221477,
            navigate: "/Sampleai_09",
        }
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
                // @ts-ignore
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
                            targetPitch="same"
                            targetYaw="same"
                            handleClick={() => type === 'custom' && startTransition(() => navigate(hotspot.navigate) as void)}
                            text={name}
                            key={idx} />
                    );
                })}
            </Pannellum>
        </div>
    )
}

export default Sample_AI09_02;