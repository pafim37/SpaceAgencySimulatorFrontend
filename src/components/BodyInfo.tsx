import React from 'react';
import "../styles/BodyInfo.css";

const BodyInfo = ({body, removeBody, setShowedData}) => {

    const clickHandler = () => {
        removeBody(body.name);
    }

    const handleClick = () => {
        setShowedData(body)
    }

    return(
        <div className="BodyInfo" onClick={handleClick}>
            <div className="RemoveBodyInfoButton" onClick={clickHandler}>X</div>
            <div>Name: {body.name}</div>
            <div>Mass: {body.mass}</div>
            <div>Radius: {body.radius}</div>
            <div>Position: &lt;{parseInt(body.position.x.toString())}, {parseInt(body.position.y.toString())}, {parseInt(body.position.z.toString())}&gt;</div>
            <div>Velocity: &lt;{parseInt(body.velocity.x.toString())}, {parseInt(body.velocity.y.toString())}, {parseInt(body.velocity.z.toString())}&gt;</div>
        </div>
    );
}

export default BodyInfo;