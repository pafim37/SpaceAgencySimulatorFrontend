import React from 'react';
import "../styles/BodySystemDescriptor.css";

const BodySystemDescriptor = ({body, removeBody, setShowedData}) => {

    const clickHandler = () => {
        removeBody(body.name);
    }

    const handleClick = () => {
        setShowedData(body)
    }

    return(
        <div className="BodyDescriptor" onClick={handleClick}>
            <hr />
            <div>Name: {body.name}</div>
            <div>Mass: {body.mass}</div>
            <div>Radius: {body.radius}</div>
            <div>Position: &lt;{parseInt(body.position.x.toString())}, {parseInt(body.position.y.toString())}, {parseInt(body.position.z.toString())}&gt;</div>
            <div>Velocity: &lt;{parseInt(body.velocity.x.toString())}, {parseInt(body.velocity.y.toString())}, {parseInt(body.velocity.z.toString())}&gt;</div>
            <button onClick={clickHandler}>Remove</button> 
            <hr />
        </div>
    );
}

export default BodySystemDescriptor;