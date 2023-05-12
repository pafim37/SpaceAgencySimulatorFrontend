import React from 'react'
import '../../styles/App.css';
import AddNewBody from '../AddNewBody.tsx';

const LeftPanel = ( {data, setData } : IDataProps ) => {
    return(
        <div className="App-left-panel">
            <AddNewBody data={data} setData={setData} />
        </div>
    );
}

export default LeftPanel; 