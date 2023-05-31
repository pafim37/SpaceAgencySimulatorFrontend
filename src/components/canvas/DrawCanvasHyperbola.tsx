import React, { useEffect } from 'react'
import '../../styles/Canvas.css'

const DrawCanvasHyperbola = (props : ICanvasHyperbola) => {
  const OX = props.width / 2;
  const OY = props.height / 2;
  const width = props.width;
  const height = props.height;
  const color = props.color

  useEffect(() => {
      const canvas = document.getElementById(props.name) as HTMLCanvasElement;
      console.log("OX OY", OX, OY);
      if(canvas !== null) {
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d')
          ctx.strokeStyle = color;
          ctx!.clearRect(0, 0, width, height);
          ctx!.beginPath();
          drawHyperbola(ctx);
          ctx!.stroke();
      }
  });

  const drawHyperbola = (ctx : CanvasRenderingContext2D) => {
      const step = 0.1;
      const startParameter = - 2 * Math.PI;
      const endParameter = 2 * Math.PI;

      const angle = props.rotation; 
      const cx = OX + Math.cos(angle) * props.centerX; 
      const cy = OY + Math.sin(angle) * props.centerY - 2 * Math.sin(angle) * props.centerX;

      for (let t = startParameter; t < endParameter; t += step) {
          const x = cx + (props.semiMajorAxis * Math.cosh(t) * Math.cos(angle)) + (props.semiMinorAxis * Math.sinh(t) * Math.sin(angle));
          const y = cy - (props.semiMajorAxis * Math.cosh(t) * Math.sin(angle)) + (props.semiMinorAxis * Math.sinh(t) * Math.cos(angle));

          if (t === startParameter) {
            ctx.moveTo(x, y);
          } 
          else {
            ctx.lineTo(x, y);
          }
      }
  }

  return (
      <canvas className='Canvas' id={props.name} />
  )
}

export default DrawCanvasHyperbola;