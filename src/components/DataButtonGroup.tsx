import React, {useContext} from 'react';
import { DataContext } from './DataContextProvider';
const DataButtonGroup = ()  => {
    const { synchronizeWithDatabase, saveDataInDatabase, getDataFromDatabase } = useContext(DataContext);

    return(
        <div style={styleButtons}>
            <button onClick={synchronizeWithDatabase}> 
                Synchronize with DB
            </button>
            <button onClick={saveDataInDatabase}> 
                Save
            </button>
            <button onClick={getDataFromDatabase}> 
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