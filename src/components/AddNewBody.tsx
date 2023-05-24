import React, { useState, useEffect, useContext } from 'react'
import '../styles/LabelInputPair.css';
import axiosBase from "../axiosBase.jsx";
import { DataContext } from './DataContextProvider';

const AddNewBody = ({ showedData }) => {
    const { data, setData } = useContext(DataContext);
    const [inputValues, setInputValues] = useState<IBody>(showedData);
    const [showedDataState, setShowedDataState] = useState<IBody>(showedData)

    useEffect(()=>{
        setShowedDataState(showedData);
        setInputValues(showedDataState);
    }, [showedDataState, setShowedDataState, showedData]);

    const exportData = async(bodiesToSend : Array<IBody>) => {
        console.log("Exporting data to the database...", bodiesToSend);
        axiosBase.post("body-system/", bodiesToSend)
        .then(response => {
            console.log("data from post:", response.data);
            data.bodies = [...data.bodies, ...response.data.bodies];
            data.orbits = [...data.orbits, ...response.data.orbitsDescription.map(o => o.orbit)];
            var uniqueBodies = data.bodies.filter( (body, ind) => ind === data.bodies.findIndex( bodyDuplicate => bodyDuplicate.name === body.name && bodyDuplicate.name === body.name))
            setData({
                bodies: uniqueBodies,
                orbits: data.orbits
            });
            response.status===200 && console.log("Data exported sucessfully")
        })
        .catch((err : Error)=> console.error(err));
    }

    const changeBodyPropertiesHandler = (event: any) => {
        event.preventDefault();
        setInputValues({...inputValues!, [event.target.name]: event.target.value});
    }

    const changeBodyPositionHandler = (event: any) => {
        event.preventDefault();
        const newPosition = {...inputValues.position, [event.target.name]: event.target.value as number}
        setInputValues({...inputValues, position: newPosition});
    }

    const changeBodyVelocityHandler = (event: any) => {
        event.preventDefault();
        const newVelocity = {...inputValues.velocity, [event.target.name]: event.target.value as number}
        setInputValues({...inputValues, velocity: newVelocity});
    }

    const clickHandler = (event: any) => {
        event.preventDefault();
        const index = data.bodies.findIndex(b => b.name === inputValues.name);
        if (index !== -1) {
            const updatedBody : Array<IBody> = [...data.bodies];
            updatedBody[index] = inputValues;
            const newData = {
                bodies: updatedBody,
                orbits: data.orbits
            }
            setData(newData);
            exportData(updatedBody);
        }
        else {
            const updatedBody = [...data.bodies, inputValues];
            const newData = {
                bodies: updatedBody,
                orbits: data.orbits
            }
            setData(newData);
            exportData(updatedBody);
        }
    }

    return(
        <div className="AddNewBodyComponent">
            <h3>Add or update new body</h3>
            <hr/>

            <div className="DetailsGroup">
                <h4>Body details</h4>
                <hr/>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Left">
                        <label>Name</label>
                    </div>
                    <div className="LabelInputPair-Right">
                        <input type="text" name="name" placeholder='Body Name' value={inputValues!.name} onChange={changeBodyPropertiesHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Left">
                        <label>Mass</label>
                    </div>
                    <div className="LabelInputPair-Right">
                        <input type="number" name="mass" placeholder='Mass' value={inputValues!.mass} onChange={changeBodyPropertiesHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Left">
                        <label>Radius</label>
                    </div>
                    <div className="LabelInputPair-Right">
                        <input type="number" name="radius" placeholder='Radius' value={inputValues!.radius} onChange={changeBodyPropertiesHandler} ></input>
                    </div>
                </div>
            </div>

            <div className="DetailsGroup">
                <div>
                    <h4>Position</h4>
                    <hr/>
                    <div className="LabelInputPair">
                        <div className="LabelInputPair-Left">
                            <label>x</label>
                        </div>
                        <div className="LabelInputPair-Right">
                            <input type="number" name="x" placeholder='PositionX' value={inputValues!.position.x} onChange={changeBodyPositionHandler} ></input>
                        </div>
                    </div>
                    <div className="LabelInputPair">
                        <div className="LabelInputPair-Left">
                            <label>y</label>
                        </div>
                        <div className="LabelInputPair-Right">
                            <input type="number" name="y" placeholder='PositionY' value={inputValues!.position.y} onChange={changeBodyPositionHandler} ></input>
                        </div>
                    </div>
                    <div className="LabelInputPair">
                        <div className="LabelInputPair-Left">
                            <label>z</label>
                        </div>
                        <div className="LabelInputPair-Right">
                            <input type="number" name="z" placeholder='PositionZ' value={inputValues!.position.z} onChange={changeBodyPositionHandler} ></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DetailsGroup">
                <h4>Velocity</h4>
                <hr />
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Left">
                        <label>x</label>
                    </div>
                    <div className="LabelInputPair-Right">
                        <input type="number" name="x" placeholder='VelocityX' value={inputValues!.velocity.x} onChange={changeBodyVelocityHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Left">
                        <label>y</label>
                    </div>
                    <div className="LabelInputPair-Right">
                        <input type="number" name="y" placeholder='VelocityY' value={inputValues!.velocity.y} onChange={changeBodyVelocityHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Left">
                        <label>z</label>
                    </div>
                    <div className="LabelInputPair-Right">
                        <input type="number" name="z" placeholder='VelocityZ' value={inputValues!.velocity.z} onChange={changeBodyVelocityHandler} ></input>
                    </div>
                </div>
            </div>
            <div className="DetailsGroup2">
                <hr />
                <button onClick ={clickHandler}>Add new Body</button> 
            </div>
        </div>
    );
}

export default AddNewBody;