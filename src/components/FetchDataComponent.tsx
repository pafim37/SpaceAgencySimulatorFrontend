import { useEffect } from 'react'

const FetchDataComponent = ({data, setData}) => {

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch("http://localhost:5000/body-system/test")
                const fetchedData = await response.json();
                data.bodies = [...data.bodies, ...fetchedData.bodies];
                data.orbits = [...data.orbits, ...fetchedData.orbitsDescription];
                setData(data);
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

export default FetchDataComponent;