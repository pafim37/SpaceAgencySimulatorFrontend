import React, { useEffect } from 'react'
import '../../styles/Canvas.css'

export default function DrawCanvasEllipse(props : ICanvasEllipse) {
    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        if(canvas !== null) {
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d')
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.beginPath();
            ctx!.ellipse(props.centerX, props.centerY, props.semiMajorAxis, props.semiMinorAxis, 0, 0, 2 * Math.PI);
            ctx!.stroke();
        }
    });

    return (
        <canvas className='Canvas' id={props.name} />
    )
}