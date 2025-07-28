import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";

import render from "../../../images/projects/sampleai09/Sample_AI09_08.jpg";
import Navbar from "../../../components/Navbar";

const Sample_AI09_08 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch: -12.740081481550195,
            yaw: -19.95949433094716,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -18.855971290316656,
            yaw: 2.0767381860122773,
            navigate: "/Sampleai_02",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -14.690884797372796,
            yaw: -37.78479291226232,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -11.98857033393422,
            yaw: -50.67139990471715,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -15.208363763527167,
            yaw: -90.5242565629528,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -15.897946138116595,
            yaw: -51.70541966413192,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch: -30.500596596804016,
            yaw: -92.6543497506861,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch: -42.64444420404129,
            yaw: 20.14232144595964,
            navigate: "/Sampleai_09",
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
                height='100vh'
                image={render}
                pitch={10}
                yaw={180}
                hfov={70}
                autoRotate={-2}
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

export default Sample_AI09_08;