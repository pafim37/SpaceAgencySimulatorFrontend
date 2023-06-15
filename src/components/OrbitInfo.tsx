import React from 'react';
import "../styles/OrbitInfo.css";

const OrbitInfo = ({orbit}) => {

    return(
        <div className="OrbitInfo" >
            <div>Name: {orbit.name}</div>
            <div>center: {parseInt(orbit.center.x)}, {parseInt(orbit.center.y)}, {parseInt(orbit.center.z)}</div>
            <div>orbitType: {orbit.orbitType}</div>
            <div>rotation: {orbit.rotation}</div>
        </div>
    );
}

export default OrbitInfo;