import React, { useState, useContext }  from 'react';
import BodySystemDescriptor from './BodySystemDescriptor';
import axiosBase from '../axiosBase.jsx';
import { DataContext } from './DataContextProvider';
import '../styles/BodyListInfo.css';

const BodyList = ({setShowedData}) => {
    const { data, setData } = useContext(DataContext);
    const [dataChange, setDataChange] = useState(false);

    const sendRequest = async (name : string) => {
        console.log("Exporting data to the database...");
        axiosBase.delete("body-system/", {data: name})
        .then(response => {
            response.status===204 && console.log("Data deleted sucessfully");
        })
        .catch(err => console.error(err));
    };

    const removeBody = (bodyName : string) => {
        const index = data.bodies.findIndex(b => b.name === bodyName);
        if (index !== -1) {
            const newBodies = [...data.bodies];
            newBodies.splice(index, 1);
            const newData = {...data, bodies: [...newBodies]};
            setData(newData);
            setDataChange(!dataChange);
            sendRequest(bodyName);
        }
    }

    return(
        <div>
            { data ? (
                data.bodies.map(
                    (body, key) => (
                        <BodySystemDescriptor 
                        key={key} 
                        body={body} 
                        removeBody={removeBody}
                        setShowedData={setShowedData}/>
                    )
                )
            ) : (
                <p>Loading data...</p>
            )
            }
        </div>
    );
}

export default BodyList;