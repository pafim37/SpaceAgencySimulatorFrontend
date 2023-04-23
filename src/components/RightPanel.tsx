import React from 'react'
import BodySystemDescriptor from './BodySystemDescriptor.tsx';

const RightPanel = ({data}) => {
    return (
        <div>
            { data ? (
                data.bodies.map((body, key) => (
                    <BodySystemDescriptor key={key} body={body} />
            ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
      );
}

export default RightPanel