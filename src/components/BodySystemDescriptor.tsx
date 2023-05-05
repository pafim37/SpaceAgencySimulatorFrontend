import React, { useEffect } from 'react'

export default function BodySystemDescriptor({body, removeBody}) {

    const clickHandler = (event: any) => {
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

const styleBody = {
    color: '#30c9b0'
}