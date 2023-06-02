import React, { useState, useContext }  from 'react';
import BodyInfo from './BodyInfo.tsx';
import axiosBase from '../axiosBase.jsx';
import { DataContext } from './DataContextProvider.tsx';
import '../styles/BodyListInfo.css';

const BodyInfoList = ({setShowedData}) => {
    const { data, setData } = useContext(DataContext);
    const [dataChange, setDataChange] = useState(false);

    const sendRequest = async (name : string) => {
        axiosBase.delete("body-system/", {data: name})
        .catch(error => console.error(error));
    };

    const removeBody = (bodyName : string) => {
        const index = data.bodies.findIndex(b => b.name === bodyName);
        if (index !== -1) {
            const newBodies : Array<IBody> = [...data.bodies];
            newBodies.splice(index, 1);
            const newData : IData = {...data, bodies: [...newBodies]};
            setData(newData);
            setDataChange(!dataChange);
            sendRequest(bodyName);
        }
    }

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