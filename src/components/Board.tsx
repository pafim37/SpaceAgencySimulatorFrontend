import React, { useEffect, useState } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './DrawCanvasEllipse.tsx';

const Board = ({data}) => {
    const [circles, setCircles] = useState([]);
    const [ellipses, setEllipses] = useState([]);

    useEffect(() => {
        if (data !== null && data !== undefined) {
            const bodyList = data?.bodies.map(
                (body, key) => (
                    <DrawCanvasCircle 
                    key={key}
                    name={body.name}
                    centerX={body.position.x}
                    centerY={body.position.y}
                    radius={body.radius}
                    />
                    ));
                setCircles(bodyList);
            const orbitList = data?.orbits.map(
                (orbit, key) => (
                        <DrawCanvasEllipse 
                        key={key}
                        name={orbit.name + " Orbit"}
                        centerX={orbit.centerX}
                        centerY={orbit.centerY}
                        semiMajorAxis={orbit.semiMajorAxis}
                        semiMinorAxis={orbit.semiMinorAxis}
                    />
                ));
            setEllipses(orbitList);
        }
    }, [data]);
    return (
        <div className="Board">
            {circles}
            {ellipses}
        </div>
    )
}

export default Board;