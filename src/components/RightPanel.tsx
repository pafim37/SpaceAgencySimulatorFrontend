import React, { useEffect, useState } from 'react'
import BodySystemDescriptor from './BodySystemDescriptor.tsx';

export default function RightPanel({data}) {
    
    const [dataChange, setDataChange] = useState(false);

    function removeBody(bodyName : string) {
        const index = data.bodies.findIndex(b => b.name === bodyName);
        if (index !== -1) {
            data.bodies.splice(index, 1);
            setDataChange(!dataChange);
        }
    }

    return (
        <div>
            { data ? (
                data.bodies.map((body, key) => (
                    <BodySystemDescriptor 
                    key={key} 
                    body={body} 
                    removeBody={removeBody}/>
            ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
      );
}