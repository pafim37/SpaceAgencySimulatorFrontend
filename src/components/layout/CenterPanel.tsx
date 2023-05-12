import React from 'react';
import '../../styles/App.css';
import Board from '../Board.tsx';
import DataButtonGroup from '../DataButtonGroup.tsx';

const CenterPanel = ({data, setData } : IDataProps ) => {
    return( 
        <div className="App-center-panel">
            <div>
                <Board data={data} />
                <DataButtonGroup data={data} setData={setData}/>
            </div>
        </div>
    );
}

export default CenterPanel;
