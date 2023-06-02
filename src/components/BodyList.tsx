import React, { useState, useContext }  from 'react';
import BodySystemDescriptor from './BodySystemDescriptor';
import axios from 'axios';
import { DataContext } from './DataContextProvider';

const BodyList = ({setShowedData}) => {
    const { data, setData } = useContext(DataContext);
    const [dataChange, setDataChange] = useState(false);

    const sendRequest = async (name : string) => {
        console.log("Exporting data to the database...");
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        };
        axios.delete("http://localhost:5000/body-system/", {headers: options.headers, data: name})
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
        <>
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
        </>
    );
}

export default BodyList;