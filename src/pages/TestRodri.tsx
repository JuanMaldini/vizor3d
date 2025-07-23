import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";
import render from "../images/1.jpg";
import Navbar from "../components/Navbar";

import './style.css';

const Page3 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [hotspots] = useState([
        {
            name: "TestRodri2",
            type: "custom",
            pitch: -5,
            yaw: -29,
            navigate: "/TestRodri2",
        },
        {
            name: "hola manola ",
            type: "info",
            pitch: 1.6,
            yaw: 177,
            navigate: "",
        },
    ]);
    const panImage = useRef<any>(null);

    return (
        <>
        <Navbar />
        <div>
            {/* <div className="pitch-yaw">
        <p className="pitch-yaw-text"> Pitch: {pitch} </p>
        <p className="pitch-yaw-text"> Yaw: {yaw} </p>
        <h5 className="pitch-yaw-text">© Alterra Academy</h5>
    </div> */}
            <Pannellum
                width='100%'
                height='100vh'
                image={render}
                // title='360 Virtual Tour'
                // previewTitle ="360 Virtual Tour"
                // author="Ken Tandrian"
                // previewAuthor="Ken Tandrian"
                // @ts-ignore
                //authorURL="https://github.com/KenTandrian"
                pitch={10}
                yaw={180}
                hfov={110}
                autoRotate={-2}
                autoLoad
                //compass
                disableKeyboardCtrl
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

export default Page3;