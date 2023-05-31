import React, { useEffect, useState, useContext } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './canvas/DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './canvas/DrawCanvasEllipse.tsx';
import { DataContext } from './DataContextProvider';
import DrawCanvasHyperbola from './canvas/DrawCanvasHyperbola.tsx';
import DrawCanvasParabola from './canvas/DrawCanvasParabola.tsx';

const Board = () => {
    const { data } = useContext(DataContext);
    const width : number = 640;
    const height : number = 480;
    const orbitColor : string = "#000099";
    const bodyColor : string = "#770000";
    const OX : number = 320;
    const OY : number = 240;
    const [bodyCanvas, setBodyCanvas] = useState([]);
    const [ellipsesCanvas, setEllipsesCanvas] = useState([]);
    const [circlesCanvas, setCirclesCanvas] = useState([]);
    const [hyperbolaCanvas, setHyperbolaCanvas] = useState([]);
    const [parabolaCanvas, setParabolaCanvas] = useState([]);

    const createBodyCanvas = (bodies : Array<IBody>) => {
        console.log("Bodies to draw", bodies);
        const bodyList = bodies.map(
            (body, key) => (
                <DrawCanvasCircle 
                width={width}
                height={height}
                color={bodyColor}
                name={body.name}
                centerX={body.position.x + OX}
                centerY={OY - body.position.y}
                radius={body.radius}
                key={"Body" + key}
                isFilled={true}
                />
                ));
            setBodyCanvas(bodyList);
    };

    const createCirclesCanvas = (orbits : Array<IOrbit>) => {
        console.log("Orbits circle to draw", orbits);
        const orbitList = orbits.filter(o => o.orbitType===0).map(
            (orbit, key) => (
                <DrawCanvasCircle 
                width={width}
                height={height}
                color={orbitColor}
                name={orbit.name}
                centerX={orbit.center.x + OX}
                centerY={OY - orbit.center.y}
                radius={orbit.radius}
                key={"Orbit" + key}
                isFilled={false}
                />
        ));
        setCirclesCanvas(orbitList);
    }

    const createEllipsesCanvas = (orbits : Array<IOrbit>) => {
        console.log("Orbits elipses to draw", orbits);
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
        setEllipsesCanvas(orbitList);
    }

    const createHyperbolaCanvas = (orbits : Array<IOrbit>) => {
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
        setHyperbolaCanvas(orbitList);
    }

    const createParabolaCanvas = (orbits : Array<IOrbit>) => {
        const orbitList = orbits.filter(o => o.orbitType===2).map(
            (orbit, key) => (
                <DrawCanvasParabola 
                width={width}
                height={height}
                color={orbitColor}
                key={key}
                name={orbit.name + "_orbit1"}
                centerX={orbit.center.x}
                centerY={orbit.center.y}
                rotation={orbit.rotation}
                />
            ));
        setParabolaCanvas(orbitList);
    }

    useEffect(() => {
        if (data !== null && data !== undefined) {
            createBodyCanvas(data.bodies);
            createCirclesCanvas(data.orbits.filter(o => o.orbitType ===0));
            createEllipsesCanvas(data.orbits.filter(o => o.orbitType === 1));
            createHyperbolaCanvas(data.orbits.filter(o => o.orbitType === 3));
            createParabolaCanvas(data.orbits.filter(o => o.orbitType === 2));
        }
    }, [data]);

    return (
        <div className="Board">
            {bodyCanvas}
            {ellipsesCanvas}
            {hyperbolaCanvas}
            {circlesCanvas}
            {parabolaCanvas}
        </div>
    )
}

export default Board;