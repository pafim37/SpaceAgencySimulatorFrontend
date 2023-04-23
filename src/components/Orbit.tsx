import React, { useEffect } from 'react'
import '../styles/Orbit.css'

const Orbit = (props : OrbitProps) => {
    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        if(canvas !== null) {
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d')
            const radiusX = props.radiusX;
            const radiusY = props.radiusY;
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.beginPath();
            ctx!.ellipse(props.positionX, props.positionY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            ctx!.stroke();
        }
    });

    return (
        <canvas className='Orbit' style={styleOrbit} id={props.name} />
    )
}

export default Orbit

const styleOrbit = {
    left: 0, 
    top: 0 
}