import React, { useRef, useEffect } from 'react';
import '../../styles/Canvas.css'

const DrawCanvasCross = (props : ICanvas) => {
  const width = props.width;
  const height = props.height;
  const color = props.color
  const lineWidth = 1;
  const size = 20;

  useEffect(() => {
    const canvas = document.getElementById(props.name) as HTMLCanvasElement;
    if(canvas !== null) {
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d')
        ctx.strokeStyle = color;
        ctx!.clearRect(0, 0, width, height);
        ctx.fillStyle = 'black';


        ctx.fillRect(props.centerX, props.centerY - size/2, lineWidth, size); // vertical
        ctx.fillRect(props.centerX - size/2, props.centerY, size, lineWidth); // horizontal
    }
  }, []);

  return <canvas className='Canvas' id={props.name} />;
};

export default DrawCanvasCross;