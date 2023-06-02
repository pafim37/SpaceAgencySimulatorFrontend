import React, { useEffect } from 'react'
import '../../styles/Canvas.css'

export default function DrawCanvasEllipse(props : ICanvasEllipse) {
    const width = props.width;
    const height = props.height;
    const color = props.color

    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        if(canvas !== null) {
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d')
            ctx.strokeStyle = color;
            ctx!.clearRect(0, 0, width, height);
            ctx!.beginPath();
            ctx!.ellipse(props.centerX, props.centerY, props.semiMajorAxis, props.semiMinorAxis, props.rotation, 0, 2 * Math.PI);
            ctx!.stroke();
        }
    });

    return (
        <canvas className='Canvas' id={props.name} />
    )
}