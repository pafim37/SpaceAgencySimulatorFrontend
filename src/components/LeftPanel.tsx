import React from 'react'
import AddNewBody from './AddNewBody.tsx';
import AddNewOrbit from './AddNewOrbit.tsx';

export default function LeftPanel( {data, setData } : IDataProps ) {
    
    return(<>
        <AddNewOrbit data={data} setData={setData}/>
        <AddNewBody data={data} setData={setData} />
    </>);
}