import React, {useContext} from 'react';
import { DataContext } from './DataContextProvider';
import '../styles/ButtonSAS.css';

const DataButtonGroup = ()  => {
    const { synchronizeWithDatabase, saveDataInDatabase, getDataFromDatabase } = useContext(DataContext);

    return(
        <div style={styleButtons}>
            <button className="ButtonSAS" onClick={saveDataInDatabase}> 
                Save
            </button>
            <button className="ButtonSAS" onClick={getDataFromDatabase}> 
                Download
            </button>
            <button className="ButtonSAS" onClick={synchronizeWithDatabase}> 
                Synchronize
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