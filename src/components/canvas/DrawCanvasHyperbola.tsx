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

            const step = 0.001;
            const startAngle = - 2 * Math.PI;
            const endAngle = 2 * Math.PI;

            console.log("center", props.centerX, props.centerY);
            console.log("a", props.semiMajorAxis);
            console.log("b", props.semiMinorAxis);
            
            
            for (let angle = startAngle; angle < endAngle; angle += step) {
                const x = OX + props.centerX - props.semiMajorAxis + props.semiMajorAxis * Math.cosh(angle);
                const y = OY + props.semiMinorAxis * Math.sinh(angle);
                if (angle === startAngle) {
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