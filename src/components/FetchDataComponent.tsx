import { useEffect } from 'react'

export default function FetchDataComponent({data, setData} : IDataProps) {

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch("http://localhost:5000/body-system/test")
                const fetchedData = await response.json();
                data.bodies = [...data.bodies, ...fetchedData.bodies];
                data.orbits = [...data.orbits, ...fetchedData.orbitsDescription.map(o => o.orbit)];
                setData({
                    bodies: data.bodies,
                    orbits: data.orbits
                });
                console.log("Data fetched sucessfully");
            } 
            catch (error) {
                console.error(error);
            }
        };
    
        dataFetch();
      }, [setData]);

    return null;
}