import styled from "styled-components";
import { IformData } from "../routes/Register";

const Div = styled.div`
    background-color: #f9f9f9;
    border: 0.1vw solid #ddd;
    border-radius: 0.8vw;
    padding: 2vh;
    margin-bottom: 3vh;
    box-shadow: 0 0.4vh 0.6vw rgba(0, 0, 0, 0.1);
`;

const H3 = styled.h3`
    font-size: 1.8vw;
    color: #666;
    margin-bottom: 0.5vw;
`;

const P = styled.p`
    font-size: 1.5vw;
    color: #333;
    margin-bottom: 0.25vw;
`;

interface IloanProps{
    children: IformData
}
const Loan: React.FC<IloanProps> = ({children}) => {
    return(
        <Div>
            <H3>Person:</H3>
            <P>{children.name}</P>
            <P>{children.cpf}</P>
            <P>{children.email}</P>
            <P>{children.phone}</P>
            <H3>Book:</H3>
            <P>{children.title}</P>
            <P>{children.author}</P>
            <P>{children.publisher}</P>
            <P>{children.publicationYear}</P>
            <H3>Loan:</H3>
            <P>{children.loan.toLocaleString()}</P>
        </Div>
    );
}

export default Loan;