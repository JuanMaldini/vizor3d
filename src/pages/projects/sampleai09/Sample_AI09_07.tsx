import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";
import render from "/images/projects/Sampleai09/Sample_AI09_07.jpg";

const Sample_AI09_07 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState();
    const [pitch, setPitch] = useState();
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch:  -18.447826580454247,
            yaw: 10.78535391084768,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -15.318869462125221,
            yaw: 30.45076194981643,
            navigate: "/Sampleai_02",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -18.343435907245166,
            yaw: -11.981568169786621,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -21.5103366181141,
            yaw: -31.77007008893558,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -28.05904379980902,
            yaw: -90.0166369015954,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_06",
            type: "custom",
            pitch: -27.80749980852305,
            yaw: -16.114712877435473,
            navigate: "/Sampleai_06",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch: -29.431855736905604,
            yaw: 85.9337419973798,
            navigate: "/Sampleai_08",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch: -22.142183292534014,
            yaw: 64.02675077852737,
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
                height='84vh'
                image={render}
                pitch={100}
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

export default Sample_AI09_07;