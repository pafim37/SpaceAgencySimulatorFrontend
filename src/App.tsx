import React, { useState, useEffect } from 'react'
import './styles/App.css';
import Board from './components/Board.tsx';
import RightPanel from './components/RightPanel.tsx';
import LeftPanel from './components/LeftPanel.tsx';
import FetchDataComponent from './components/FetchDataComponent.tsx';

type DataType = {
  bodies: Array<IBody>;
  orbits: Array<IOrbit>;
}

const initial = {
  bodies: [],
  orbits: []
}

export default function App() {
  const [data, setData] = useState<DataType>(initial);

  useEffect(() => {
  }, [data, setData]);

  return (
    <div className='App'>
      <div className="App-header">
        <h1>Space Agency Simulator</h1>
      </div>
      <div className='App-body'>
        <div className="App-left-panel">
          <LeftPanel data={data} onUpdateData={setData} />
        </div>
        <div className="App-center-panel">
          {/* TODO: Is it good place for FetchDataComponent? */}
          <FetchDataComponent onDataFetch={setData}/> 
          <Board data={data} />
        </div>
        <div className="App-right-panel">
          <RightPanel data={data} setData={setData}/>
        </div>
      </div>
      <div className='App-footer' />
    </div>
  );
}