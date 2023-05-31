import React, { useEffect } from 'react'
import '../../styles/Canvas.css'

const DrawCanvasCircle = (props : ICanvasCircle) => {
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
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.beginPath();
            ctx!.arc(props.centerX, props.centerY, props.radius, 0, 2 * Math.PI);
            ctx!.stroke();
            ctx.fillStyle = color;
            ctx.fill();
        }
    });

    return (
        <canvas className='Canvas' id={props.name} />
    )
}

export default DrawCanvasCircle;