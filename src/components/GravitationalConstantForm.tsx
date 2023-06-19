import React, { useState, useContext } from 'react'
import DataContext from './DataContextProvider';
import '../styles/ButtonSAS.css';
import '../styles/GravitationalConstant.css';

const GravitationalConstantForm = () => {
    const { data } = useContext(DataContext);
    const [gravitationalConstantState, setGravitationalConstantState] = useState(data.gravitationalConstant);
    const { createBodySystem } = useContext(DataContext);

    const validateGravitationalConstant = (gravitationalConstant : number) => {
        if (gravitationalConstant <= 0) {
            alert("Gravitational constant must be a positive number!");
            return false;
        }
        else {
            return true;
        }
    }
   
    const changeGravitationalConstant = (event: any) => {
        event.preventDefault();
        const gravitationalConstant = event.target.value;
        setGravitationalConstantState(gravitationalConstant);
    };

    const updateG = () => {
        const isValid = validateGravitationalConstant(gravitationalConstantState);
        if (isValid) {
            createBodySystem(gravitationalConstantState);
        }
        else {
            setGravitationalConstantState(data.gravitationalConstant);
        }
    }

    return(
        <div className="GravitationalConstant">
            <div className='GravitationalConstant-Label'> 
                <label>Gravitational Constant</label>
            </div>
            <div className='GravitationalConstant-Input'> 
                <input type="number" name="z" placeholder='6.67 x 10^-11 [m^2 kg^-1 s^-1]' value={gravitationalConstantState} onChange={changeGravitationalConstant} ></input>
            </div>
            <div className='GravitationalConstant-Button'> 
                <button className="ButtonSAS" onClick={updateG}>Update G</button>
            </div>
        </div>
    );
}

export default GravitationalConstantForm;