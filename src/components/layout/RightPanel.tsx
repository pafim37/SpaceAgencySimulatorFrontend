import React, { useState } from 'react'
import BodySystemDescriptor from '../BodySystemDescriptor.tsx';

const RightPanel = ({data, setData} : IDataProps) => {
    
    const [dataChange, setDataChange] = useState(false);

    const sendRequest = async (name : string) => {
        const response = await fetch("http://localhost:5000/body-system/", 
        {
          method: "DELETE",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(name)
        })
        console.log("response", await response.json());
      };

    function removeBody(bodyName : string) {
        const index = data.bodies.findIndex(b => b.name === bodyName);
        if (index !== -1) {
            const newBodies = [...data.bodies];
            newBodies.splice(index, 1);
            const newData = {...data, bodies: [...newBodies]};
            setData(newData);
            setDataChange(!dataChange);
            sendRequest(bodyName);
        }
    }

    return (
        <div className="App-right-panel">
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

export default RightPanel; 