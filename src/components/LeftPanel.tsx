import React, { useState, useEffect } from 'react'
import AddNewBody from './AddNewBody.tsx';
import AddNewOrbit from './AddNewOrbit.tsx';

export default function LeftPanel( {data, onUpdateData } ) {
    const [bodyData, setBodyData] = useState<Array<IBody>>([]);
    const [orbitData, setOrbitData] = useState<Array<IOrbit>>([]);

    useEffect(() => {
        const data = {
            bodies: bodyData,
            orbits: orbitData
        }
        onUpdateData(data);
        setBodyData(data.bodies);
    }, [bodyData, orbitData])
    
    return(
        <>
            <AddNewOrbit orbitData={data.orbits} onUpdateOrbitData={setOrbitData}/>
            <AddNewBody bodyData={data.bodies} onUpdateBodyData={setBodyData} />
        </>
    );
}