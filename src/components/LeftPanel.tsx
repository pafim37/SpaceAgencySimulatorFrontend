import React, { useState } from 'react'

export interface ILeftPanel {
    name: string;
    positionX: number;
    positionY: number;
    radiusX: number;
    radiusY: number;
  }

function LeftPanel( { onUpdate } ) {
    const [inputValues, setInputValues] = useState<ILeftPanel>({
        name: "O1",
        positionX: 0,
        positionY: 0,
        radiusX: 150,
        radiusY: 100,
    });

    const changeHandler = (e: any) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value})
     }

    const clickHandler = (e: any) => {
        e.preventDefault();
        setInputValues({...inputValues, [e.target.name]: e.target.value});
        onUpdate({
            name: inputValues.name,
            positionX: inputValues.positionX,
            positionY: inputValues.positionY,
            radiusX: inputValues.radiusX,
            radiusY: inputValues.radiusY
        });
    }

    return(
        <>
        <div>
            <input type="text" name="name" placeholder='Name' value={inputValues.name} onChange={changeHandler} ></input>
            <input type="number" name="positionX" placeholder='Position x' value={inputValues.positionX} onChange={clickHandler} ></input>
            <input type="range" name="positionX" min="1" max="640" value={inputValues.positionX} onChange={clickHandler} ></input>
            <input type="number" name="positionY" placeholder='Position y' value={inputValues.positionY} onChange={clickHandler}></input>
            <input type="range" name="positionY" min="1" max="640" value={inputValues.positionY} onChange={clickHandler}></input>
            <input type="number" name="radiusX" placeholder='Radius x' value={inputValues.radiusX} onChange={clickHandler}></input>
            <input type="range" name="radiusX" min="1" max="640" value={inputValues.radiusX} onChange={clickHandler}></input>
            <input type="number" name="radiusY" placeholder='Radius y' value={inputValues.radiusY} onChange={clickHandler}></input>
            <input type="range" name="radiusY" min="1" max="640" value={inputValues.radiusY} onChange={clickHandler}></input>
        </div>
        <div>
        </div>
            <button style={styleButton} onClick ={clickHandler}>Add new Orbit</button> 
        </>
    );
}
export default LeftPanel;

const styleButton = {
    backgroundColor: "#008060"
}