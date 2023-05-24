import React, { useEffect, useState, useContext } from 'react'
import '../styles/Board.css';
import DrawCanvasCircle from './canvas/DrawCanvasCircle.tsx';
import DrawCanvasEllipse from './canvas/DrawCanvasEllipse.tsx';
import { DataContext } from './DataContextProvider';

const Board = () => {
    const { data } = useContext(DataContext);
    const OX : number = 319;
    const OY : number = 240;
    const [circles, setCircles] = useState([]);
    const [ellipses, setEllipses] = useState([]);

    useEffect(() => {
        console.log("Orbits to draw: ", data.orbits.filter(o => o.orbitType===1));
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
            console.log("data.orbits", data);
            const orbitList = data.orbits.filter(o => o.orbitType===1).map(
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
            setEllipses(orbitList);
            console.log("orbitList",orbitList);
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