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
  createBodySystem: (props : number) => void;
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
    let dataDb : IData = undefined as IData;
    await axiosBase.get("", { params : {gravitationalConstant: data.gravitationalConstant }})
        .then(response => {
          dataDb = response.data
    })
    .catch((error : Error)=> console.error(error));
    const allBodies = [...dataDb.bodies, ...data.bodies];
    var uniqueBodies = allBodies.filter( (body, index) => index === allBodies.findIndex( bodyDuplicate => bodyDuplicate.name === body.name && bodyDuplicate.name === body.name));
    const newData : IData = {
      gravitationalConstant: data.gravitationalConstant,
      bodies: uniqueBodies,
      orbits: [] // TODO: remove this
    };
    createBodySystemRequest(newData);
  }; 

  const removeBody = async (name : string) => {
    const newBodies = data.bodies.filter(b => b.name !== name);
    const newData : IData = {
      gravitationalConstant: data.gravitationalConstant,
      bodies: newBodies,
      orbits: [...data.orbits]
    };
    createBodySystemRequest(newData);
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
    createBodySystemRequest(newData);
  }

  const createBodySystemRequest = (newData : IData) => {
    axiosBase.post("create", newData)
    .then(response => {
      setData(response.data);
    })
    .catch((error : Error)=> console.error(error));
  }

  const createBodySystem = (gravitationalConstant : number) => {
    const newData : IData = {...data, gravitationalConstant: gravitationalConstant};
    createBodySystemRequest(newData);
  }

  return (
    <DataContext.Provider value={{ data, setData, getDataFromDatabase, createBodySystem, removeBody, addOrUpdateBody, saveDataInDatabase, synchronizeWithDatabase }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;