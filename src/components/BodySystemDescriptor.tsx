import React from 'react'

const BodySystemDescriptor = ({body}) => {
    return(
        <div style={styleBody} className="Body-descriptor">
            <hr />
            <div>Name: {body.name}</div>
            <div>Mass: {body.mass}</div>
            <div>Position: &lt;{parseInt(body.position.x.toString())}, {parseInt(body.position.y.toString())}, {parseInt(body.position.z.toString())}&gt;</div>
            <div>Velocity: &lt;{parseInt(body.velocity.x.toString())}, {parseInt(body.velocity.y.toString())}, {parseInt(body.velocity.z.toString())}&gt;</div>
            <hr />
        </div>
    );
}

export default BodySystemDescriptor

const styleBody = {
    color: '#30c9b0'
}