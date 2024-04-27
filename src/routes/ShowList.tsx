import axios from "axios";
import { useEffect, useRef, useState } from "react";
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
    max-width: 80vw;
    margin: 0 auto;
    padding: 2vh 2vw;
`;

const Label = styled.label`
    margin-left: 0.5vw;
    margin-bottom: 0.5vh;
    font-weight: bold;
`;

const Div2 = styled.div`
    text-align: center;
`;

const StyleInputAndSelect = css`
    width: calc(25% - 0.1vw);
    padding: 0.8vh 0.8vw;
    margin-bottom: 1vh;
    border: 0.1vw solid #ccc;
    border-radius: 0.5vw;
`;

const Input = styled.input`
    ${StyleInputAndSelect};
`;

const Select = styled.select`
    ${StyleInputAndSelect};
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const Li = styled.li`
    margin-bottom: 5vh;
`;

const ShowList = () => {
    const [list, setList] = useState<IformData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [inputFilterValue, setInputFilterValue] = useState<string>("");

    const navigate = useNavigate();

    const selectRef = useRef<HTMLSelectElement>(null);

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

    const handleSelectChange = () => {
        if(selectRef.current){
            setSelectedValue(selectRef.current.value);
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputFilterValue(event.target.value)
    }

    return (
        <Div>
            <Div2>
                <Label htmlFor="text-filter">Filter:</Label>
                <Input type={selectedValue} name="filter" id="text-filter" onChange={handleInputChange}/>
                <Label htmlFor="select-filter">Filter by:</Label>
                <Select ref={selectRef} name="filter-select" id="filter-select" onChange={handleSelectChange}>
                    <option value="text">CPF</option>
                    <option value="datetime-local">Date</option>
                    <option value="number">Publication year</option>
                </Select>
            </Div2>
            <Ul>
                {list
                .filter(loan => loan.cpf.includes(inputFilterValue) || loan.publicationYear === Number(inputFilterValue)|| loan.loan.toString() >= inputFilterValue)
                .map((loan, index) => (
                    <Li key={index}><Loan>{loan}</Loan></Li>
                ))}
            </Ul>
            <button onClick={() => navigate("/register")}>Register a loan</button>
        </Div>
    );
}

export default ShowList;