import React, { useContext, useEffect }  from 'react';
import OrbitInfo from './OrbitInfo.tsx';
import DataContext  from './DataContextProvider.tsx';
import '../styles/OrbitListInfo.css';

const OrbitInfoList = () => {
    const { data } = useContext(DataContext);

    useEffect(() => {
        console.log("orbits: ", data.orbits);
    });

    return(
        <div>
            {data.orbits.map(
                (orbit, key) => (
                    <OrbitInfo
                        key={key} 
                        orbit={orbit} 
                    />
            ))}
        </div>
    );
}

export default OrbitInfoList;