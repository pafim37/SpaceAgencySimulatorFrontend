import React, { useState, useEffect } from 'react'
import AddNewBody from './AddNewBody.tsx';
import AddNewOrbit from './AddNewOrbit.tsx';

export default function LeftPanel( { onUpdateData } ) {
    // TODO: decide on one BodyType or IBody 
    const [bodyData, setBodyData] = useState<BodyType[]>([]);
    const [orbitData, setOrbitData] = useState<IOrbit[]>([]);

    useEffect(() => {
        const data = {
            bodies: bodyData,
            orbits: orbitData
        }
        console.log("Data in LeftPanel: ", data);
        onUpdateData(data);
    }, [bodyData, orbitData])
    
    return(
        <>
            <AddNewOrbit orbitData={orbitData} onUpdateOrbitData={setOrbitData}/>
            <AddNewBody bodyData={bodyData} onUpdateBodyData={setBodyData} />
        </>
    );
}