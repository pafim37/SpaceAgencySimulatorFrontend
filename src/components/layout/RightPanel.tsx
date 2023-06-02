import React from 'react';
import BodyInfoList from '../BodyInfoList.tsx';

const RightPanel = ({setShowedData}) => {
    return (
        <div className="AppRightPanel">
            <BodyInfoList setShowedData={setShowedData}/>
        </div>
      );
}

export default RightPanel; 