import React from 'react';
import BodyInfoList from '../BodyInfoList.tsx';
import OrbitInfoList from '../OrbitInfoList.tsx';

const RightPanel = ({setShowedData}) => {
    return (
        <div className="AppRightPanel">
            <OrbitInfoList />
            <BodyInfoList setShowedData={setShowedData}/>
        </div>
      );
}

export default RightPanel; 