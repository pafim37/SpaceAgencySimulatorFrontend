import React, { useState } from 'react'

const initialBody : IBody = {
    name: "xyz",
    mass: 10,
    radius: 5,
    position: {
        x: 10,
        y: 10,
        z: 0
    },
    velocity: {
        x: 0,
        y: 0,
        z: 0
    }
}

type AddNewBodyType = {
    bodyData : Array<IBody>;
    onUpdateBodyData(props : Array<IBody>): void;
}

export default function AddNewBody({bodyData , onUpdateBodyData} : AddNewBodyType) {
    const [inputValues, setInputValues] = useState<IBody>(initialBody);

    const changeBodyPropertiesHandler = (event: any) => {
        event.preventDefault();
        setInputValues({...inputValues!, [event.target.name]: event.target.value});
    }

    const changeBodyPositionHandler = (event: any) => {
        event.preventDefault();
        const new_position = {...inputValues.position, [event.target.name]: event.target.value as number}
        setInputValues({...inputValues, position: new_position});
    }

    const changeBodyVelocityHandler = (event: any) => {
        event.preventDefault();
        const new_position = {...inputValues.position, [event.target.name]: event.target.value as number}
        setInputValues({...inputValues, position: new_position});
    }

    const clickHandler = (event: any) => {
        event.preventDefault();
        const index = bodyData.findIndex(b => b.name === inputValues.name);
        if (index !== -1) {
            const updatedBody = [...bodyData];
            updatedBody[index] = inputValues;
            onUpdateBodyData(updatedBody);
        }
        else {
            onUpdateBodyData([...bodyData, inputValues]);
        }
    }

    return(
        <div>
            <label>Name</label>
            <input type="text" name="name" placeholder='Body Name' value={inputValues!.name} onChange={changeBodyPropertiesHandler} ></input>
            <label>Mass</label>
            <input type="number" name="mass" placeholder='Mass' value={inputValues!.mass} onChange={changeBodyPropertiesHandler} ></input>
            <label>Radius</label>
            <input type="number" name="radius" placeholder='Radius' value={inputValues!.velocity.y} onChange={changeBodyPropertiesHandler} ></input>
            <label>Position X</label>
            <input type="number" name="x" placeholder='PositionX' value={inputValues!.position.x} onChange={changeBodyPositionHandler} ></input>
            <label>Position Y</label>
            <input type="number" name="y" placeholder='PositionY' value={inputValues!.position.y} onChange={changeBodyPositionHandler} ></input>
            {/* TODO: add z */}
            <label>Velocity X</label>
            <input type="number" name="x" placeholder='VelocityX' value={inputValues!.velocity.x} onChange={changeBodyVelocityHandler} ></input>
            <label>Velocity Y</label>
            <input type="number" name="y" placeholder='VelocityY' value={inputValues!.velocity.y} onChange={changeBodyVelocityHandler} ></input>
            {/* TODO: add z */}
            <button onClick ={clickHandler}>Add new Body</button> 
        </div>
    );
}