import axios from "axios";
import { useEffect, useState } from "react";

const ShowList = () => {
    const [list, setList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://apigenerator.dronahq.com/api/PxY0zUv0/libraryData");
                setList(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    },[]);

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Show list</h1>
        </div>
    );
}

export default ShowList;