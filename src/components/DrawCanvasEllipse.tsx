import React, { useEffect } from 'react'
import '../styles/Orbit.css'

const DrawCanvasEllipse = (props) => {
    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        if(canvas !== null) {
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d')
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.beginPath();
            ctx!.ellipse(props.positionX, props.positionY, props.semiMajorAxis, props.semiMinorAxis, 0, 0, 2 * Math.PI);
            ctx!.stroke();
        }
    });

    return (
        <canvas className='Canvas' style={styleDrawCanvasEllipse} id={props.name} />
    )
}

export default DrawCanvasEllipse

const styleDrawCanvasEllipse = {
    left: 0, 
    top: 0 
}