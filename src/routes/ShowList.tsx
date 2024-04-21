import axios from "axios";
import { useEffect, useState } from "react";
import { IformData } from "./Register";
import Loan from "../components/Loan";

const ShowList = () => {
    const [list, setList] = useState<IformData[]>([]);
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
            <ul>
                {list.map((loan, index) => (
                    <li key={index}><Loan>{loan}</Loan></li>
                ))}
            </ul>
        </div>
    );
}

export default ShowList;