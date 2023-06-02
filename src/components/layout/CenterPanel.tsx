import React, { useContext }from 'react';
import '../../styles/App.css';
import Board from '../Board.tsx';
import DataButtonGroup from '../DataButtonGroup.tsx';
import { DataContext } from '../DataContextProvider';

const CenterPanel = () => {
    const { data, setData } = useContext(DataContext);
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
