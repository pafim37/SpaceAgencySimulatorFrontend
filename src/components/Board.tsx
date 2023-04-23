import React, { useEffect, useState } from 'react'
import '../styles/Board.css';
import Orbit from './Orbit.tsx';

const Board = ({data}) => {
    const [drawData, setDrawData] = useState([]);

    useEffect(() => {
        console.log("Board -> useEffect [data]: ", data);
        if (data !== null) {
            const bodyList = data.bodies.map(
                (body, key) => (
                    <Orbit 
                    key={key+100}
                    name={body.name}
                    positionX={body.position.x}
                    positionY={body.position.y}
                    radiusX={5}
                    radiusY={5}
                    />
                ));
            
            const orbitList = data.orbitsDescription.map(
                (orbitDescription, key) => {
                    if (orbitDescription.orbit.orbitType === 0) {
                        return (
                            <Orbit 
                            key={key}
                            name={orbitDescription.name+" Orbit"}
                            positionX={100}
                            positionY={100}
                            radiusX={orbitDescription.orbit.radius}
                            radiusY={orbitDescription.orbit.radius}
                            />
                        )}
                    else {
                        return(<div key={key}/>)
                    }
                });
            setDrawData([...orbitList, ...bodyList]);
            console.log("drawData", drawData);
        }
    }, [data]);
    return (
        <div className="Board">
            {drawData}
        </div>
    )
}

export default Board