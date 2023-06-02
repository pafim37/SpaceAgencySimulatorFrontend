import React, { useEffect } from 'react'
import '../../styles/Canvas.css'

const DrawCanvasCircle = (props : ICanvasCircle) => {
    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        if(canvas !== null) {
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d')
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.beginPath();
            ctx!.arc(props.centerX, props.centerY, props.radius, 0, 2 * Math.PI);
            ctx!.stroke();
        }
    });

    return (
        <canvas className='Canvas' id={props.name} />
    )
}

export default DrawCanvasCircle;