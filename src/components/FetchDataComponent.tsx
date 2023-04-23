import React, { useEffect, useState } from 'react'

export interface BodySystem {
    bodies: Body[]
}

const FetchDataComponent = (onDataFetch) => {
    const [data, setData] = useState<BodySystem>({bodies: []});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch("http://localhost:5000/body-system/test")
                const data : BodySystem = await response.json();
                setData(data);
                setLoading(false);
            } 
            catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
    
        dataFetch();
        console.log("Done");
      }, []);

    useEffect(()=> {
        if (data) {
            onDataFetch(data);
        }
    }, [data, onDataFetch])

    return null;
}