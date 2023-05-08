import React, { useState } from 'react'
import BodySystemDescriptor from './BodySystemDescriptor.tsx';

export default function RightPanel({data, setData} : IDataProps) {
    
    const [dataChange, setDataChange] = useState(false);

    function removeBody(bodyName : string) {
        const index = data.bodies.findIndex(b => b.name === bodyName);
        if (index !== -1) {
            const newBodies = [...data.bodies];
            newBodies.splice(index, 1);
            const newData = {...data, bodies: [...newBodies]};
            setData(newData);
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