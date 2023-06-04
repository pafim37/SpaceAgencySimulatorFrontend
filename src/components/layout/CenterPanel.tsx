import React, { useContext }from 'react';
import '../../styles/App.css';
import Board from '../Board.tsx';
import DataButtonGroup from '../DataButtonGroup.tsx';

const CenterPanel = () => {
    return( 
        <div className="App-center-panel">
            <div>
                <Board />
                <DataButtonGroup />
            </div>
        </div>
    );
}

export default CenterPanel;
