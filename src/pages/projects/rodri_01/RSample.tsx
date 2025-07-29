import { startTransition, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";
import PanelLateral from "../../../components/PanelLateral";

import render from "../../../images/projects/RSample/1.jpg";

const RSample = () => {
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
    
    useEffect(() => {
        // Espera a que el componente se monte y los controles de zoom estén disponibles
        const timer = setTimeout(() => {
            const zoomControls = document.querySelector('.pnlm-zoom-controls');
            
            // Solo añade el botón si existe el contenedor de controles de zoom y no existe ya el botón personalizado
            if (zoomControls && !document.querySelector('.pnlm-custom-button')) {
                // Crear el nuevo botón
                const newButton = document.createElement('div');
                newButton.className = 'pnlm-sprite pnlm-control pnlm-custom-button';
                
                // Estilos para que sea igual que los otros pero debajo del segundo
                newButton.style.width = '100%';
                newButton.style.height = '50%';  // Igual altura que los otros botones
                newButton.style.position = 'absolute';
                newButton.style.bottom = '-50%';  // Posicionado justo debajo del último botón
                newButton.style.backgroundPosition = '0 -52px';  // Usar un sprite existente 
                newButton.style.borderTop = '1px solid rgba(0,0,0,0.1)';
                newButton.style.borderRadius = '0 0 3px 3px';
                
                // Añadir el botón al contenedor de zoom
                zoomControls.appendChild(newButton);
                
                // Ajustar la altura del contenedor de botones para que se vea el nuevo botón
                if (zoomControls instanceof HTMLElement) {
                    zoomControls.style.height = '78px';  // 52px original + 26px del nuevo botón
                }
                
                // Añadir funcionalidad al botón (puedes cambiarla según necesites)
                newButton.addEventListener('click', () => {
                    alert('Botón personalizado pulsado');
                });
            }
        }, 500);  // Pequeño retraso para asegurar que Pannellum ha terminado de renderizarse
        
        return () => clearTimeout(timer);
    }, []);

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

export default RSample;