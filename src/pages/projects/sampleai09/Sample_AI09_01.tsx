import { startTransition, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Pannellum } from "pannellum-react";
import render from "../../../images/projects/Sampleai09/Sample_AI09_01.jpg";

const Sample_AI09_01 = () => {
    let navigate = useNavigate();
    const [pitch, setPitch] = useState();
    const [yaw, setYaw] = useState();
    const [hotspots] = useState([
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -39.3,
            yaw: 76,
            navigate: "/Sampleai_02",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -39.5,
            yaw: -79.3,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -22.5,
            yaw: -83.7,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -15.54410302288399,
            yaw: -137.44656566250043,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -36.71850384146028,
            yaw: -123.6022459805157,
            navigate: "/Sampleai_06",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch: -19.12233911507805,
            yaw: -169.84819835377016,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch: -16.182970890091525,
            yaw: 157.45360506549025,
            navigate: "/Sampleai_08",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch: -17.201298350399053,
            yaw: 131.86112603426764,
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
                pitch={-32.33833884932688}
                yaw={132.19221152571745}
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
                            handleClick={() => type === 'custom' && startTransition(() => navigate(hotspot.navigate, { state: { pitch: hotspot.pitch, yaw: hotspot.yaw } }) as void)}
                            text={name}
                            key={idx} />
                    );
                })}
            </Pannellum>
        </div>
    )
}

export default Sample_AI09_01;