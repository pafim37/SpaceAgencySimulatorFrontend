import React, {useEffect, useState} from 'react';
import axiosBase from '../axiosBase.jsx';

const initialData : IData = {
  gravitationalConstant: 1,
  bodies: [],
  orbits: []
};

type DataContextType = {
  data: IData,
  setData: (props: React.SetStateAction<IData>) => void;
  removeBody: ( props : string ) => Promise<void>;
  addOrUpdateBody: (props : IBody) => void;
  saveDataInDatabase: () => void;
  synchronizeWithDatabase: () => void;
  getDataFromDatabase: () => void;
}

export const DataContext = React.createContext<DataContextType>({} as DataContextType);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState<IData>(initialData);

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  const saveDataInDatabase = async () => {
    axiosBase.post("save", data.bodies)
      .catch((err : Error)=> console.error(err));
  }

  const synchronizeWithDatabase = async () => {
    axiosBase.post("synchronize", data)
    .then(response => 
      setData(response.data))
    .catch((error : Error)=> console.error(error));
  }

  const getDataFromDatabase = async () => {
    axiosBase.get("", { params : {gravitationalConstant: data.gravitationalConstant }})
        .then(response => {
        setData(response.data);
    })
    .catch((error : Error)=> console.error(error));
  }; 

  const removeBody = async (name : string) => {
    const newBodies = data.bodies.filter(b => b.name !== name);
    const newData : IData = {
      gravitationalConstant: data.gravitationalConstant,
      bodies: newBodies,
      orbits: [...data.orbits]
    };
    createBodySystem(newData);
  }

  const addOrUpdateBody = (newBody : IBody) => {
    const index = data.bodies.findIndex(b => b.name === newBody.name);
    let newData : IData = undefined as IData;
    if (index === -1) {
      const allBodies = [...data.bodies, newBody];
      newData = {
        gravitationalConstant: data.gravitationalConstant,
        bodies: allBodies,
        orbits: data.orbits
      }
    }
    else {
      const bodies = [...data.bodies];
      bodies[index] = newBody;
      newData = {
        gravitationalConstant: data.gravitationalConstant,
        bodies: bodies,
        orbits: data.orbits
      }
    }
    createBodySystem(newData);
  }

  const createBodySystem = (newData : IData) => {
    axiosBase.post("create", newData)
    .then(response => {
      setData(response.data);
    })
    .catch((err : Error)=> console.error(err));
  }

  return (
    <DataContext.Provider value={{ data, setData, getDataFromDatabase, removeBody, addOrUpdateBody, saveDataInDatabase, synchronizeWithDatabase }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;