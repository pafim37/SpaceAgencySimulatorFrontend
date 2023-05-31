import React, { useEffect, useState, useContext } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './canvas/DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './canvas/DrawCanvasEllipse.tsx';
import { DataContext } from './DataContextProvider';
import DrawCanvasHyperbola from './canvas/DrawCanvasHyperbola.tsx';

const Board = () => {
    const { data } = useContext(DataContext);
    const width : number = 640;
    const height : number = 480;
    const orbitColor : string = "#000099";
    const bodyColor : string = "#770000";
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
                width={width}
                height={height}
                color={bodyColor}
                name={body.name}
                centerX={parseInt(body.position.x) + OX}
                centerY={OY - parseInt(body.position.y)}
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
                width={width}
                height={height}
                color={orbitColor}
                key={key}
                name={orbit.name + "_orbit"}
                centerX={OX - orbit.center.x}
                centerY={OY - orbit.center.y}
                semiMajorAxis={orbit.semiMajorAxis}
                semiMinorAxis={orbit.semiMinorAxis}
                rotation={orbit.rotation}
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
                width={width}
                height={height}
                color={orbitColor}
                key={key}
                name={orbit.name + "_orbit"}
                centerX={orbit.center.x}
                centerY={orbit.center.y}
                semiMajorAxis={orbit.semiMajorAxis}
                semiMinorAxis={orbit.semiMinorAxis}
                rotation={orbit.rotation}
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