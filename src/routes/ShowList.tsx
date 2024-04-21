import axios from "axios";
import { useEffect, useState } from "react";
import { IformData } from "./Register";
import Loan from "../components/Loan";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
    ${Style}
    min-height: 100vh;
`;

const ShowList = () => {
    const [list, setList] = useState<IformData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

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
        <Div>
            <h1>Show list</h1>
            <ul>
                {list.map((loan, index) => (
                    <li key={index}><Loan>{loan}</Loan></li>
                ))}
            </ul>
            <button onClick={() => navigate("/register")}>Register a loan</button>
        </Div>
    );
}

export default ShowList;