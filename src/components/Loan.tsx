import { IformData } from "../routes/Register";

interface IloanProps{
    children: IformData
}
const Loan: React.FC<IloanProps> = ({children}) => {
    return(
        <div>
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
        </div>
    );
}

export default Loan;