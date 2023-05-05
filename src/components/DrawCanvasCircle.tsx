import React, { useEffect } from 'react'
import '../styles/Orbit.css'

const DrawCanvasCircle = (props) => {
    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        if(canvas !== null) {
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d')
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.beginPath();
            ctx!.arc(props.positionX, props.positionY, props.radius, 0, 2 * Math.PI);
            ctx!.stroke();
        }
    });

    return (
        <canvas className='Canvas' style={styleDrawCanvasCircle} id={props.name} />
    )
}

export default DrawCanvasCircle

const styleDrawCanvasCircle = {
    left: 0, 
    top: 0 
}