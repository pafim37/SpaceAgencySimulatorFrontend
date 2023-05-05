import React, { useState, useEffect } from 'react'
import AddNewBody from './AddNewBody.tsx';
import AddNewOrbit from './AddNewOrbit.tsx';

export default function LeftPanel( { onUpdateData } ) {
    const [bodyData, setBodyData] = useState<Array<IBody>>([]);
    const [orbitData, setOrbitData] = useState<Array<IOrbit>>([]);

    useEffect(() => {
        const data = {
            bodies: bodyData,
            orbits: orbitData
        }
        onUpdateData(data);
    }, [bodyData, orbitData])
    
    return(
        <>
            <AddNewOrbit orbitData={orbitData} onUpdateOrbitData={setOrbitData}/>
            <AddNewBody bodyData={bodyData} onUpdateBodyData={setBodyData} />
        </>
    );
}