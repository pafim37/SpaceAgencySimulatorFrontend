import React, { useRef, useEffect} from 'react'

const Canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radiusX = 100
    const radiusY = 50
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI)
    ctx.stroke();
  }, []);
    
  return <canvas ref={canvasRef} />
}

export default Canvas