import React from 'react';

const DataButtonGroup = ({data, setData } : IDataProps ) => {
    
    const exportData = async () => {
        const response = await fetch("http://localhost:5000/body-system/", 
        {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(data.bodies)
        })
        console.log("response", await response.json());
      };
    
    const importData = async () => {
        try {
            const response = await fetch("http://localhost:5000/body-system/",
            {
              method: "GET"
            })
            const fetchedData = await response.json();
            data.bodies = [...data.bodies, ...fetchedData.bodies];
            data.orbits = [...data.orbits, ...fetchedData.orbitsDescription.map(o => o.orbit)];
            setData({
                bodies: data.bodies,
                orbits: data.orbits
            });
            console.log("Data fetched sucessfully");
        } 
        catch (error) {
            console.error(error);
        }
    }

    return(
        <div style={styleButtons}>
            <button onClick={exportData}> 
                Save
            </button>
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