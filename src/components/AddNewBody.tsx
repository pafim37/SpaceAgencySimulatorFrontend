import React, { useState, useEffect, useContext } from 'react'
import '../styles/LabelInputPair.css';
import DataContext from './DataContextProvider.tsx';

const AddNewBody = ({ showedData }) => {
    const { data } = useContext(DataContext);
    const { addOrUpdateBody } = useContext(DataContext);
    const [inputValues, setInputValues] = useState<IBody>(showedData);
    const [showedDataState, setShowedDataState] = useState<IBody>(showedData);
    const [buttonText, setButtonText] = useState("Add new body");

    useEffect(()=>{
        setShowedDataState(showedData);
        setInputValues(showedDataState);
    }, [showedDataState, setShowedDataState, showedData]);

    useEffect(() => {
        const index = data.bodies.findIndex(body => body.name === inputValues.name);
        if(index === -1) {
            setButtonText("Add new body");
        }
        else {
            setButtonText("Update body");
        }
    }, [inputValues.name, data]);

    const changeBodyPropertiesHandler = (event: any) => {
        event.preventDefault();
        setInputValues({...inputValues!, [event.target.name]: event.target.value});
    }

    const validateInputValues = () => {
        if (inputValues.name === "") {
            alert("Name cannot be empty");
            return false;
        }
        else if (inputValues.mass <= 0) {
            alert("Mass must be a positive number");
            return false;
        }
        else if (inputValues.radius <= 0) {
            alert("Radius must be a positive number");
            return false;
        }
        else if (inputValues.position.x.toString() === "" || inputValues.position.y.toString() === "" || inputValues.position.z.toString() === "") {
            alert("Incorect position vector");
            return false;
        }
        else if (inputValues.velocity.x.toString() === "" || inputValues.velocity.y.toString() === "" || inputValues.velocity.z.toString() === "") {
            alert("Incorect velocity vector");
            return false;
        }
        else if (data.bodies.some(body => body.position.x === inputValues.position.x && body.position.y === inputValues.position.y && body.position.z === inputValues.position.z))
        {
            alert("There is body in chosen position");
            return false;
        }
        else {
            return true;
        }
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
        const isValid = validateInputValues();
        if(isValid) {
            addOrUpdateBody(inputValues);
            setButtonText("Update body");
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
                    <div className="LabelInputPair-Label">
                        <label>Name</label>
                    </div>
                    <div className="LabelInputPair-Input">
                        <input type="text" name="name" placeholder='Body Name' value={inputValues!.name} onChange={changeBodyPropertiesHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Label">
                        <label>Mass</label>
                    </div>
                    <div className="LabelInputPair-Input">
                        <input type="number" name="mass" placeholder='Mass' value={inputValues!.mass} onChange={changeBodyPropertiesHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Label">
                        <label>Radius</label>
                    </div>
                    <div className="LabelInputPair-Input">
                        <input type="number" name="radius" placeholder='Radius' value={inputValues!.radius} onChange={changeBodyPropertiesHandler} ></input>
                    </div>
                </div>
            </div>

            <div className="DetailsGroup">
                <div>
                    <h4>Position</h4>
                    <hr/>
                    <div className="LabelInputPair">
                        <div className="LabelInputPair-Label">
                            <label>x</label>
                        </div>
                        <div className="LabelInputPair-Input">
                            <input type="number" name="x" placeholder='PositionX' value={inputValues!.position.x} onChange={changeBodyPositionHandler} ></input>
                        </div>
                    </div>
                    <div className="LabelInputPair">
                        <div className="LabelInputPair-Label">
                            <label>y</label>
                        </div>
                        <div className="LabelInputPair-Input">
                            <input type="number" name="y" placeholder='PositionY' value={inputValues!.position.y} onChange={changeBodyPositionHandler} ></input>
                        </div>
                    </div>
                    <div className="LabelInputPair">
                        <div className="LabelInputPair-Label">
                            <label>z</label>
                        </div>
                        <div className="LabelInputPair-Input">
                            <input type="number" name="z" placeholder='PositionZ' value={inputValues!.position.z} onChange={changeBodyPositionHandler} ></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DetailsGroup">
                <h4>Velocity</h4>
                <hr />
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Label">
                        <label>x</label>
                    </div>
                    <div className="LabelInputPair-Input">
                        <input type="number" name="x" placeholder='VelocityX' value={inputValues!.velocity.x} onChange={changeBodyVelocityHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Label">
                        <label>y</label>
                    </div>
                    <div className="LabelInputPair-Input">
                        <input type="number" name="y" placeholder='VelocityY' value={inputValues!.velocity.y} onChange={changeBodyVelocityHandler} ></input>
                    </div>
                </div>
                <div className="LabelInputPair">
                    <div className="LabelInputPair-Label">
                        <label>z</label>
                    </div>
                    <div className="LabelInputPair-Input">
                        <input type="number" name="z" placeholder='VelocityZ' value={inputValues!.velocity.z} onChange={changeBodyVelocityHandler} ></input>
                    </div>
                </div>
            </div>
            <div className="DetailsGroup2">
                <hr />
                <button onClick ={clickHandler}>{buttonText}</button> 
            </div>
        </div>
    );
}

export default AddNewBody;