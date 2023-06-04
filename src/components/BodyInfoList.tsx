import React, { useContext }  from 'react';
import BodyInfo from './BodyInfo.tsx';
import DataContext  from './DataContextProvider.tsx';
import '../styles/BodyListInfo.css';

const BodyInfoList = ({setShowedData}) => {
    const { data } = useContext(DataContext);
    const { removeBody } = useContext(DataContext);

    return(
        <div>
            {data.bodies.map(
                (body, key) => (
                    <BodyInfo
                    key={key} 
                    body={body} 
                    removeBody={removeBody}
                    setShowedData={setShowedData}/>
            ))}
        </div>
    );
}

export default BodyInfoList;