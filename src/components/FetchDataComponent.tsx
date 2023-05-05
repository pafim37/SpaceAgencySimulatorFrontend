import { useEffect } from 'react'

const FetchDataComponent = ({onDataFetch}) => {

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch("http://localhost:5000/body-system/test")
                const data : Body[] = await response.json();
                onDataFetch(data);
                console.log("Data fetched sucessfully");
            } 
            catch (error) {
                console.error(error);
            }
        };
    
        dataFetch();
      }, [onDataFetch]);

    return null;
}

export default FetchDataComponent;