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
                    key={key+100}
                    name={body.name}
                    positionX={body.position.x}
                    positionY={body.position.y}
                    radius={5} // body.radius
                    />
                    ));
                    setCircles(bodyList);
            if (data.orbits !== undefined && data.orbits !== null) {
                const orbitList = data?.orbits.map(
                    (orbit, key) => {
                        return (
                            <DrawCanvasEllipse 
                            key={key}
                            name={orbit.name +" Orbit"}
                            positionX={100}
                            positionY={100}
                            semiMajorAxis={orbit.semiMajorAxis}
                            semiMinorAxis={orbit.semiMinorAxis}
                        />
                        )}
                        );
                        setEllipses(orbitList);
                    }
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