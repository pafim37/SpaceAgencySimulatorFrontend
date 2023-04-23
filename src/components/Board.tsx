import React, { useEffect, useState } from 'react'
import '../styles/Board.css';
import DrawCanvasEllipse from './DrawCanvasEllipse.tsx';
import DrawCanvasCircle from './DrawCanvasCircle.tsx';

const Board = ({data}) => {
    const [circles, setCircles] = useState([]);
    const [ellipses, setEllipses] = useState([]);

    useEffect(() => {
        if (data !== null) {
            console.log("data.bodies", data.bodies)
            const bodyList = data.bodies.map(
                (body, key) => (
                    <DrawCanvasCircle 
                    key={key+100}
                    name={body.name}
                    positionX={body.position.x}
                    positionY={body.position.y}
                    radius={5} // body.radius
                    />
                ));
            setCircles(bodyList);
            const orbitList = data.orbitsDescription.map(
                (orbitDescription, key) => {
                    if (orbitDescription.orbit.orbitType === 0) {
                        return (
                            <DrawCanvasCircle 
                            key={key}
                            name={orbitDescription.name+" Orbit"}
                            positionX={100}
                            positionY={100}
                            radius={orbitDescription.orbit.radius}
                            />
                        )}
                });
            setEllipses(orbitList);
            console.log("bodyList", bodyList);
            console.log("circles", circles);
        }
    }, [data]);
    return (
        <div className="Board">
            {circles}
            {ellipses}
        </div>
    )
}

export default Board