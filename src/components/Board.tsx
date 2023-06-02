import React, { useEffect, useState, useContext } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './canvas/DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './canvas/DrawCanvasEllipse.tsx';
import { DataContext } from './DataContextProvider';

const Board = () => {
    const { data } = useContext(DataContext);
    const OX : number = 320;
    const OY : number = 240;
    const [circles, setCircles] = useState([]);
    const [ellipses, setEllipses] = useState([]);

    useEffect(() => {
        if (data !== null && data !== undefined) {
            const bodyList = data?.bodies.map(
                (body, key) => (
                    <DrawCanvasCircle 
                    name={body.name}
                    centerX={parseInt(body.position.x) + OX}
                    centerY={parseInt(body.position.y)  + OY}
                    radius={body.radius}
                    key={key + "Body"}
                    />
                    ));
                setCircles(bodyList);
                console.log(bodyList);
            const orbitList = data?.orbits.map(
                (orbit : IOrbit, key) => (
                        <DrawCanvasEllipse 
                        key={key}
                        name={orbit.name + " Orbit"}
                        centerX={parseInt(orbit.centerX) + OX}
                        centerY={parseInt(orbit.centerY) + OY}
                        semiMajorAxis={orbit.semiMajorAxis}
                        semiMinorAxis={orbit.semiMinorAxis}
                    />
                ));
            setEllipses(orbitList);
            console.log(orbitList);
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