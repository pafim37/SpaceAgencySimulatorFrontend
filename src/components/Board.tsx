import React, { useEffect } from 'react'
import '../styles/Board.css';
import Orbit from './Orbit.tsx';

function Board({orbits}) {
    const orbitList = orbits.map(
        (orbit, key) => (
            <Orbit 
            key={key}
            name={orbit.name}
            positionX={orbit.positionX}
            positionY={orbit.positionY}
            radiusX={orbit.radiusX}
            radiusY={orbit.radiusY}
            />
        ));

    return (
        <div className="Board">
           {orbitList}
        </div>
    )
}

export default Board