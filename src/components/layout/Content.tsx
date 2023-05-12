import React, { useState, useEffect } from 'react'
import '../../styles/App.css';
import RightPanel from './RightPanel.tsx';
import LeftPanel from './LeftPanel.tsx';
import CenterPanel from './CenterPanel.tsx';

const initial = {
    bodies: [],
    orbits: []
  }

const Content = () => {
    const [data, setData] = useState<IData>(initial);

    useEffect(() => {
    }, [data, setData]);

    return(
        <div className='App-body'>
            <LeftPanel data={data} setData={setData} />
            <CenterPanel data={data} setData={setData} />
            <RightPanel data={data} setData={setData} />
        </div>
    )
}

export default Content;
