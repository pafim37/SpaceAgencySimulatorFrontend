import React, { useState } from 'react'
import '../../styles/App.css';
import RightPanel from './RightPanel.tsx';
import LeftPanel from './LeftPanel.tsx';
import CenterPanel from './CenterPanel.tsx';
import { DataContextProvider } from '../DataContextProvider';

const initialBody : IBody = {
    name: "",
    mass: 10,
    radius: 5,
    position: { x: 0, y: 0, z: 0 },
    velocity: { x: 0, y: 0, z: 0 }
}

const Content = () => {
    const [showedData, setShowedData] = useState<IBody>(initialBody);
    
    return(
        <div className='App-body'>
            <DataContextProvider>
                <LeftPanel showedData={showedData}/>
                <CenterPanel />
                <RightPanel setShowedData={setShowedData} />
            </DataContextProvider>
        </div>
    )
}

export default Content;
