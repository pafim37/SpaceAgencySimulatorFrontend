import React, {useEffect} from 'react';
import axiosBase from '../axiosBase';

const DataButtonGroup = ( {data , setData} : IDataProps)  => {
    useEffect(() => {
        importData();
    }, []);

    const importData = async () => {
        console.log("Importing data from the database...");
        axiosBase.get("body-system/")
            .then(response => {
            data.bodies = [...data.bodies, ...response.data.bodies];
            data.orbits = [...data.orbits, ...response.data.orbitsDescription.map(o => o.orbit)];
            var uniqueBodies = data.bodies.filter( (body, ind) => ind === data.bodies.findIndex( bodyDuplicate => bodyDuplicate.name === body.name && bodyDuplicate.name === body.name))
            setData({
                bodies: uniqueBodies,
                orbits: data.orbits
            });
            response.status===200 && console.log("Data imported sucessfully");

        })
        .catch(err => console.error(err));
    }; 
    
    return(
        <div style={styleButtons}>
            <button onClick={importData}> 
                Get
            </button>
        </div>
    );
}

export default DataButtonGroup;

const styleButtons = {
    display: "flex",
    alignItems: "left",
    justifyContent: "center"
}