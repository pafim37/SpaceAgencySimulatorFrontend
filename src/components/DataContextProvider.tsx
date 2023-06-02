import React, {useState} from 'react';

const initialData : IData = {
  gravitationalConstant: 1,
  bodies: [],
  orbits: []
};

const DataContext = React.createContext<IDataProps | undefined>(undefined);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState<IData>(initialData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };