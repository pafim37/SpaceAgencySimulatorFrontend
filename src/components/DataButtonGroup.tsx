import React, {useContext} from 'react';
import { DataContext } from './DataContextProvider';
const DataButtonGroup = ()  => {
    const { synchronizeWithDatabase, saveDataInDatabase } = useContext(DataContext);

    return(
        <div style={styleButtons}>
            <button onClick={synchronizeWithDatabase}> 
                Synchronize with DB
            </button>
            <button onClick={saveDataInDatabase}> 
                Save
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