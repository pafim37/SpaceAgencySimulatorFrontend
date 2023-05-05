import React, { useState } from 'react'

const initialOrbit = {
    name: "O1",
    positionX: 0,
    positionY: 0,
    semiMajorAxis: 150,
    semiMinorAxis: 100
}

export default function AddNewOrbit({orbitData, onUpdateOrbitData}) {
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
            <input type="number" name="positionX" placeholder='Position x' value={inputValues.positionX} onChange={clickHandler} ></input>
            <input type="range" name="positionX" min="1" max="640" value={inputValues.positionX} onChange={clickHandler} ></input>
            <input type="number" name="positionY" placeholder='Position y' value={inputValues.positionY} onChange={clickHandler}></input>
            <input type="range" name="positionY" min="1" max="640" value={inputValues.positionY} onChange={clickHandler}></input>
            <input type="number" name="radiusX" placeholder='Radius x' value={inputValues.semiMajorAxis} onChange={clickHandler}></input>
            <input type="range" name="radiusX" min="1" max="640" value={inputValues.semiMajorAxis} onChange={clickHandler}></input>
            <input type="number" name="radiusY" placeholder='Radius y' value={inputValues.semiMinorAxis} onChange={clickHandler}></input>
            <input type="range" name="radiusY" min="1" max="640" value={inputValues.semiMinorAxis} onChange={clickHandler}></input>
            <button style={styleButton} onClick ={clickHandler}>Add new Orbit</button>
        </>
    );
}

const styleButton = {
    backgroundColor: "#008060"
}