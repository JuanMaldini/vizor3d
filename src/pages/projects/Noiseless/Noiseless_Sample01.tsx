import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";

const Noiseless_Sample01 = () => {

    const render = 'https://res.cloudinary.com/dlpynom5r/image/upload/v1754327886/1_xdx0gk.jpg';


    let navigate = useNavigate();
    const [yaw, setYaw] = useState();
    const [pitch, setPitch] = useState();
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
                pitch={-1.1195383276232724}
                yaw={43.568985506613785}
                hfov={100}
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

export default Noiseless_Sample01;