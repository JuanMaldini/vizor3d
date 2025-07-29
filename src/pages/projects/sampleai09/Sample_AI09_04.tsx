import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";
import render from "../../../images/projects/sampleai09/Sample_AI09_04.jpg";

const Sample_AI09_04 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState();
    const [pitch, setPitch] = useState();
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch: -22.26,
            yaw: 83.34,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -14.98,
            yaw: 84.90,
            navigate: "/Sampleai_02",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -39,
            yaw: 78.2,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -20.733420533908816,
            yaw: -178.94586609971043,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -28.679708683621662,
            yaw: 120.70057724831881,
            navigate: "/Sampleai_06",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch: -16.21390483985229,
            yaw: 147.6725101755357,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch: -12.010246671985387,
            yaw: 123.76136172388765,
            navigate: "/Sampleai_08",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch: -8.095310457991827,
            yaw: 112.36683727588053,
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

export default Sample_AI09_04;