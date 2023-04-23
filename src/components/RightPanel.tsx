import React, { useEffect, useState } from 'react'
import BodySystemDescriptor from './BodySystemDescriptor.tsx';

interface BodySystem {
    bodies: Body[]
}

const RightPanel = ({onDataFetch}) => {
    const [data, setData] = useState<BodySystem>();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch("http://localhost:5000/body-system/test")
                const data : BodySystem = await response.json();
                setData(data);
                onDataFetch(data);
                setLoading(false);
            } 
            catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
    
        dataFetch();
      }, []);

    return (
        <div>
            { !loading ? (
                data.bodies.map((body, key) => (
                    <BodySystemDescriptor key={key} body={body} />
            ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
      );
}

export default RightPanel