import React, { useContext } from 'react'
import '../styles/LabelInputPair.css';
import DataContext from './DataContextProvider';

const GravitationalConstantForm = () => {
    const { data, setData } = useContext(DataContext);

    const changeGravitationalConstant = (event: any) => {
        event.preventDefault();
        const newData = {...data, gravitationalConstant: event.target.value};
        setData(newData);
    };
    return(
        <div className="GravitationalConstant" style={FormStyle}>
            <div className="LabelInputPair">
                <div className="LabelInputPair-Label">
                    <label>Gravitational Constant</label>
                </div>
                <div className="LabelInputPair-Input">
                    <input type="number" name="z" placeholder='6.67 x 10^-11 [m^2 kg^-1 s^-1]' value={data.gravitationalConstant} onChange={changeGravitationalConstant} ></input>
                </div>
            </div>
        </div>
    );
}

export default GravitationalConstantForm;

const FormStyle = {
    marginTop: "50px"
}