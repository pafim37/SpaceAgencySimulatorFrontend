import React, { useEffect } from 'react'

const BodySystemDescriptor = ({body, removeBody}) => {

    const clickHandler = () => {
        removeBody(body.name);
    }

    useEffect(()=>{});
    return(
        <div style={styleBody} className="Body-descriptor">
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

const styleBody = {
    color: '#30c9b0'
}