import React from 'react';
import BodyList from '../BodyList.tsx';

const RightPanel = ({setShowedData}) => {
    return (
        <div className="App-right-panel">
            <BodyList setShowedData={setShowedData}/>
        </div>
      );
}

export default RightPanel; 