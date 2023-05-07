import React, { useState } from 'react'

const initialOrbit = {
    name: "O1",
    centerX: 0,
    centerY: 0,
    semiMajorAxis: 150,
    semiMinorAxis: 100
}

type AddNewOrbitType = {
    orbitData : Array<IOrbit>;
    onUpdateOrbitData(props : Array<IOrbit>): void;
}

export default function AddNewOrbit({orbitData, onUpdateOrbitData} : AddNewOrbitType) {
    const [inputValues, setInputValues] = useState<IOrbit>(initialOrbit);
    
    const changeHandler = (event: any) => {
        event.preventDefault();
        setInputValues({...inputValues, [event.target.name]: event.target.value})
     }

    const clickHandler = (event: any) => {
        event.preventDefault();
        const index = orbitData.findIndex(o => o.name === inputValues.name);
        if (index !== -1) {
            const updatedOrbits = [...orbitData];
            updatedOrbits[index] = inputValues;
            onUpdateOrbitData(updatedOrbits);
        }
        else {
            onUpdateOrbitData([...orbitData, inputValues]);
        }
    }

    return(
        <>
            <input type="text" name="name" placeholder='Name' value={inputValues.name} onChange={changeHandler} ></input>
            <input type="number" name="centerX" placeholder='Center X' value={inputValues.centerX} onChange={clickHandler} ></input>
            <input type="range" name="centerX" min="1" max="640" value={inputValues.centerX} onChange={changeHandler} ></input>
            <input type="number" name="centerY" placeholder='Center y' value={inputValues.centerY} onChange={changeHandler}></input>
            <input type="range" name="centerY" min="1" max="640" value={inputValues.centerY} onChange={changeHandler}></input>
            <input type="number" name="semiMajorAxis" placeholder='Radius x' value={inputValues.semiMajorAxis} onChange={changeHandler}></input>
            <input type="range" name="semiMajorAxis" min="1" max="640" value={inputValues.semiMajorAxis} onChange={changeHandler}></input>
            <input type="number" name="semiMinorAxis" placeholder='Radius y' value={inputValues.semiMinorAxis} onChange={changeHandler}></input>
            <input type="range" name="semiMinorAxis" min="1" max="640" value={inputValues.semiMinorAxis} onChange={changeHandler}></input>
            <button style={styleButton} onClick ={clickHandler}>Add new Orbit</button>
        </>
    );
}

const styleButton = {
    backgroundColor: "#008060"
}