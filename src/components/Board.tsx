import React, { useEffect, useState, useContext } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './canvas/DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './canvas/DrawCanvasEllipse.tsx';
import DataContext from './DataContextProvider';
import DrawCanvasHyperbola from './canvas/DrawCanvasHyperbola.tsx';
import DrawCanvasParabola from './canvas/DrawCanvasParabola.tsx';
import DrawCanvasCross from './canvas/DrawCanvasCross.tsx';

const Board = () => {
    const { data } = useContext(DataContext);
    const width : number = 640;
    const height : number = 480;
    const orbitColor : string = "#000099";
    const bodyColor : string = "#770000";
    const crossColor : string = "#000000";
    const OX : number = 320;
    const OY : number = 240;
    const [bodyCanvas, setBodyCanvas] = useState([]);
    const [ellipsesCanvas, setEllipsesCanvas] = useState([]);
    const [circlesCanvas, setCirclesCanvas] = useState([]);
    const [hyperbolaCanvas, setHyperbolaCanvas] = useState([]);
    const [parabolaCanvas, setParabolaCanvas] = useState([]);

    const createBodyCanvas = (bodies : Array<IBody>) => {
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
        const orbitList = orbits.map(
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
        const orbitList = orbits.map(
            (orbit, key) => (
                <DrawCanvasEllipse 
                width={width}
                height={height}
                color={orbitColor}
                key={key}
                name={"Orbit" + orbit.name + key }
                centerX={orbit.center.x + OX}
                centerY={OY - orbit.center.y}
                semiMajorAxis={orbit.semiMajorAxis}
                semiMinorAxis={orbit.semiMinorAxis}
                rotation={orbit.rotation}
                />
            ));
        setEllipsesCanvas(orbitList);
    }

    const createHyperbolaCanvas = (orbits : Array<IOrbit>) => {
        const orbitList = orbits.map(
            (orbit, key) => (
                <DrawCanvasHyperbola 
                width={width}
                height={height}
                color={orbitColor}
                key={key}
                name={"Orbit" + orbit.name + key}
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
        const orbitList = orbits.map(
            (orbit, key) => (
                <DrawCanvasParabola 
                width={width}
                height={height}
                color={orbitColor}
                key={key}
                name={"Orbit" + orbit.name + key}
                centerX={orbit.center.x}
                centerY={orbit.center.y}
                rotation={orbit.rotation}
                />
            ));
        setParabolaCanvas(orbitList);
    }

    const cross = <DrawCanvasCross 
        width={width}
        height={height}
        color={crossColor}
        name='cross'
        centerX={OX}
        centerY={OY}
    />

    useEffect(() => {
        if (data !== null && data !== undefined) {
            createBodyCanvas(data.bodies);
            createEllipsesCanvas(data.orbits.filter(o => o.orbitType === 0));
            createHyperbolaCanvas(data.orbits.filter(o => o.orbitType === 1));
            createCirclesCanvas(data.orbits.filter(o => o.orbitType === 2));
            createParabolaCanvas(data.orbits.filter(o => o.orbitType === 3));
        }
    }, [data]);

    return (
        <div className="Board">
            {bodyCanvas}
            {ellipsesCanvas}
            {hyperbolaCanvas}
            {circlesCanvas}
            {parabolaCanvas}
            {cross}
        </div>
    )
}

export default Board;