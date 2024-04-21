import styled from "styled-components";
import { IformData } from "../routes/Register";

const Div = styled.div`
    background-color: #f9f9f9;
    border: 0.1vw solid #ddd;
    border-radius: 0.8vw;
    padding: 3vh;
    margin-bottom: 3vh;
    box-shadow: 0 0.4vh 0.6vw rgba(0, 0, 0, 0.1);
`;

interface IloanProps{
    children: IformData
}
const Loan: React.FC<IloanProps> = ({children}) => {
    return(
        <Div>
            <h3>Person:</h3>
            <p>{children.name}</p>
            <p>{children.cpf}</p>
            <p>{children.email}</p>
            <p>{children.phone}</p>
            <h3>Book:</h3>
            <p>{children.title}</p>
            <p>{children.author}</p>
            <p>{children.publisher}</p>
            <p>{children.publicationYear}</p>
            <h3>Loan:</h3>
            <p>{children.loan.toLocaleString()}</p>
        </Div>
    );
}

export default Loan;