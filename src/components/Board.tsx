import React, { useEffect, useState, useContext } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './canvas/DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './canvas/DrawCanvasEllipse.tsx';
import { DataContext } from './DataContextProvider';

const Board = () => {
    const { data } = useContext(DataContext);
    const OX : number = 319;
    const OY : number = 240;
    const [circlesCanvas, setCirclesCanvas] = useState([]);
    const [ellipsesCanvas, setEllipsesCanvas] = useState([]);

    const createCirclesCanvas = (bodies : Array<IBody>) => {
        const bodyList = bodies.map(
            (body, key) => (
                <DrawCanvasCircle 
                name={body.name}
                centerX={parseInt(body.position.x) + OX}
                centerY={parseInt(body.position.y)  + OY}
                radius={body.radius}
                key={"Body" + key}
                />
                ));
            setCirclesCanvas(bodyList);
    };

    const createEllipsesCanvas = (orbits : Array<IOrbit>) => {
        const orbitList = orbits.filter(o => o.orbitType===1).map(
            (orbit, key) => (
                <DrawCanvasEllipse 
                key={key}
                name={"Orbit" + key}
                centerX={OX + orbit.center.x}
                centerY={OY + orbit.center.y}
                semiMajorAxis={orbit.semiMajorAxis}
                semiMinorAxis={orbit.semiMinorAxis}
                />
            ));
        setEllipsesCanvas(orbitList);
    }

    useEffect(() => {
        if (data !== null && data !== undefined) {
            createCirclesCanvas(data.bodies);
            createEllipsesCanvas(data.orbits);
        }
    }, [data]);

    return (
        <div className="Board">
            {circlesCanvas}
            {ellipsesCanvas}
        </div>
    )
}

export default Board;