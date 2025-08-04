import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";

const Sample_AI09_06 = () => {
    const render = "https://res.cloudinary.com/dlpynom5r/image/upload/v1754327887/Sample_AI09_06_j6kmxr.jpg";
    let navigate = useNavigate();
    const [yaw, setYaw] = useState();
    const [pitch, setPitch] = useState();
    const [hotspots] = useState([
        {
            name: "Sampleai_01",
            type: "custom",
            pitch: -31.163373949401862,
            yaw: 40.10544356810522,
            navigate: "/Sampleai_01",
        },
        {
            name: "Sampleai_02",
            type: "custom",
            pitch: -20.28979049413677,
            yaw: 59.77693379377578,
            navigate: "/Sampleai_02",
        },
        {
            name: "Sampleai_03",
            type: "custom",
            pitch: -38.274376766243684,
            yaw: -3.9811814423990715,
            navigate: "/Sampleai_03",
        },
        {
            name: "Sampleai_04",
            type: "custom",
            pitch: -28.222816532607172,
            yaw: -48.479075915685065,
            navigate: "/Sampleai_04",
        },
        {
            name: "Sampleai_05",
            type: "custom",
            pitch: -23.691310907868168,
            yaw: -139.3652455733243,
            navigate: "/Sampleai_05",
        },
        {
            name: "Sampleai_07",
            type: "custom",
            pitch: -29.003184150971585,
            yaw: 161.6564590249756,
            navigate: "/Sampleai_07",
        },
        {
            name: "Sampleai_08",
            type: "custom",
            pitch: -20.079889909033017,
            yaw: 123.59358293242587,
            navigate: "/Sampleai_08",
        },
        {
            name: "Sampleai_09",
            type: "custom",
            pitch: -15.661701680967486,
            yaw: 101.38726200220353,
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

export default Sample_AI09_06;