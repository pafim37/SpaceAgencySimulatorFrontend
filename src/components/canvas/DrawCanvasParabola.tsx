import React, { useEffect } from 'react'
import '../../styles/Canvas.css'

const DrawCanvasParabola = (props : ICanvasParabola) => {
    const OX = props.width / 2;
    const OY = props.height / 2;
    const width = props.width;
    const height = props.height;
    const color = props.color;

    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        
        if(canvas !== null) {
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d')
            ctx.strokeStyle = color;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const a = 0;
            ctx!.beginPath();
            const ang = props.rotation + Math.PI / 2;
            for (let x = -width / 2; x <= width / 2; x++) {
                const y = a * x * x;
                const xp = x * Math.cos(ang) - y * Math.sin(ang);
                const yp = x * Math.sin(ang) + y * Math.cos(ang);
                ctx.lineTo(props.centerY + yp + OX, props.centerX + OY + xp);
            }
            ctx!.stroke();
    }
  });

  return (
    <canvas className='Canvas' id={props.name} />
)
};

export default DrawCanvasParabola;