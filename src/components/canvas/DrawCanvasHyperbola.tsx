import React, { useEffect } from 'react'
import '../../styles/Canvas.css'

const DrawCanvasHyperbola = (props : ICanvasHyperbola) => {
    useEffect(() => {
        const canvas = document.getElementById(props.name) as HTMLCanvasElement;
        const color = "#000099";
        const OX = 320;
        const OY = 240;
        if(canvas !== null) {
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d')
            ctx.strokeStyle = color;
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.beginPath();

            const step = 0.1;
            const startAngle = - 2 * Math.PI;
            const endAngle = 2 * Math.PI;

            const a = props.rotation; 
            const cx = OX + Math.cos(a) * props.centerX; // works for vector center = (r - a, r-a , 0)
            const cy = OY + Math.sin(a) * props.centerY - 2 * Math.sin(a) * props.centerX; // works for vector center = (r - a, r-a , 0)

            console.log("center", cx, cy, a * 180 / Math.PI);
            console.log("a", props.semiMajorAxis);
            console.log("b", props.semiMinorAxis);
            for (let t = startAngle; t < endAngle; t += step) {
                const x = cx + (props.semiMajorAxis * Math.cosh(t) * Math.cos(a)) + (props.semiMinorAxis * Math.sinh(t) * Math.sin(a)); // chat gpt
                const y = cy - (props.semiMajorAxis * Math.cosh(t) * Math.sin(a)) + (props.semiMinorAxis * Math.sinh(t) * Math.cos(a)); // chat gpt

                if (t === startAngle) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
            ctx!.stroke();
        }
    });

    return (
        <canvas className='Canvas' id={props.name} />
    )
}

export default DrawCanvasHyperbola;