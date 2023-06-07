import React from 'react'
import '../../styles/App.css';
import AddNewBodyForm from '../AddNewBodyForm.tsx';
import GravitationalConstantForm from '../GravitationalConstantForm.tsx';

const LeftPanel : React.FC<{showedData : IBody}> = ( { showedData } ) => {
    return(
        <div className="App-left-panel">
            <GravitationalConstantForm />
            <AddNewBodyForm showedData={showedData}/>
        </div>
    );
}

export default LeftPanel; 