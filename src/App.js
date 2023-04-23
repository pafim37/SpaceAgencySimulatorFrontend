import React, { useState, useEffect } from 'react'
import './styles/App.css';
import Board from './components/Board.tsx';
import RightPanel from './components/RightPanel.tsx';
import LeftPanel from './components/LeftPanel.tsx';
import FetchDataComponent from './components/FetchDataComponent.tsx';

const App = () => {
  const [orbits, setOrbits] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
  }, [orbits, setOrbits]);

  useEffect(() => {
  }, [data, setData]);

  const onUpdate = (orbit) => {
    const index = orbits.findIndex(o => o.name === orbit.name);
    if (index !== -1) {
      const updatedOrbits = [...orbits];
      updatedOrbits[index] = orbit;
      setOrbits(updatedOrbits);
    }
    else {
      setOrbits([...orbits, orbit]);
    }
  };

  return (
    <div className='App'>
      <div className="App-header">
        <h1>Space Agency Simulator</h1>
      </div>
      <div className='App-body'>
        <div className="App-left-panel">
          <LeftPanel onUpdate={onUpdate} />
        </div>
        <div className="App-center-panel">
          {/* TODO: Is it good place for FetchDataComponent? */}
          <FetchDataComponent onDataFetch={setData}/> 
          <Board data={data}/>
        </div>
        <div className="App-right-panel">
          <RightPanel data={data} />
        </div>
      </div>
      <div className='App-footer' />
    </div>
  );
}

export default App;
