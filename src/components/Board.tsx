import React, { useEffect, useState, useContext } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './canvas/DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './canvas/DrawCanvasEllipse.tsx';
import { DataContext } from './DataContextProvider';
import DrawCanvasHyperbola from './canvas/DrawCanvasHyperbola.tsx';

const Board = () => {
    const { data } = useContext(DataContext);
    const OX : number = 320;
    const OY : number = 240;
    const [circlesCanvas, setCirclesCanvas] = useState([]);
    const [ellipsesCanvas, setEllipsesCanvas] = useState([]);
    const [hyperbolaCanvas, setHyperbolaCanvas] = useState([]);

    const createCirclesCanvas = (bodies : Array<IBody>) => {
        console.log("Bodies to draw", bodies);
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
        console.log("Orbits to draw", orbits);
        const orbitList = orbits.filter(o => o.orbitType===1).map(
            (orbit, key) => (
                <DrawCanvasEllipse 
                key={key}
                name={orbit.name + "_orbit"}
                centerX={OX + orbit.center.x}
                centerY={OY + orbit.center.y}
                semiMajorAxis={orbit.semiMajorAxis}
                semiMinorAxis={orbit.semiMinorAxis}
                />
            ));
        console.log("Orbits list to draw", orbitList);
        setEllipsesCanvas(orbitList);
    }

    const createHyperbolaCanvas = (orbits : Array<IOrbit>) => {
        console.log("Orbits hyperbola to draw", orbits);
        const orbitList = orbits.filter(o => o.orbitType===3).map(
            (orbit, key) => (
                <DrawCanvasHyperbola 
                key={key}
                name={orbit.name + "_orbit"}
                centerX={orbit.center.x}
                centerY={orbit.center.y}
                semiMajorAxis={orbit.semiMajorAxis}
                semiMinorAxis={orbit.semiMinorAxis}
                />
            ));
        console.log("Orbits list to draw", orbitList);
        setHyperbolaCanvas(orbitList);
    }

    useEffect(() => {
        if (data !== null && data !== undefined) {
            createCirclesCanvas(data.bodies);
            createEllipsesCanvas(data.orbits.filter(o => o.orbitType === 1));
            createHyperbolaCanvas(data.orbits.filter(o => o.orbitType === 3));
        }
    }, [data]);

    return (
        <div className="Board">
            {circlesCanvas}
            {ellipsesCanvas}
            {hyperbolaCanvas}
        </div>
    )
}

export default Board;