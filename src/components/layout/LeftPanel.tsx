import React from 'react'
import '../../styles/App.css';
import AddNewBody from '../AddNewBody.tsx';
import GravitationalConstantForm from '../GravitationalConstantForm.tsx';

const LeftPanel : React.FC<{showedData : IBody}> = ( { showedData } ) => {
    return(
        <div className="App-left-panel">
            <GravitationalConstantForm />
            <AddNewBody showedData={showedData}/>
        </div>
    );
}

export default LeftPanel; 