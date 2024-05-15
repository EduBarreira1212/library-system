import "@testing-library/jest-dom"
import { getByText, render, screen } from "@testing-library/react"
import Loan from "../components/Loan"

describe("Loan component", () => {
    const data = { 
        name: "Eduardo",
        cpf: "111.111.111-11",
        email: "edu@gmail.com",
        phone: "(85)11111-2222",
        title: "Harry Potter",
        author: "JK",
        publisher: "JK cia",
        publicationYear: 1950,
        loan: new Date()
    }
    test("render loan", () => {
        render(<Loan>{data}</Loan>)
        expect(screen.getByText('Person:')).toBeInTheDocument();
        expect(screen.getByText(data.name)).toBeInTheDocument();
        expect(screen.getByText(data.cpf)).toBeInTheDocument();
        expect(screen.getByText(data.email)).toBeInTheDocument();
        expect(screen.getByText(data.phone)).toBeInTheDocument();
        expect(screen.getByText('Book:')).toBeInTheDocument();
        expect(screen.getByText(data.title)).toBeInTheDocument();
        expect(screen.getByText(data.author)).toBeInTheDocument();
        expect(screen.getByText(data.publisher)).toBeInTheDocument();
        expect(screen.getByText(data.publicationYear.toString())).toBeInTheDocument();
        expect(screen.getByText('Loan:')).toBeInTheDocument();
        expect(screen.getByText(data.loan.toLocaleString())).toBeInTheDocument();
    })
    test("testing style", () => {
        render(<Loan>{data}</Loan>)
        const loan = screen.getByTestId("loan-div");
        expect(loan).toHaveStyle(`
        background-color: #f9f9f9;
        border: 0.1vw solid #ddd;
        border-radius: 0.8vw;
        padding: 2vh;
        margin-bottom: 3vh;
        box-shadow: 0 0.4vh 0.6vw rgba(0, 0, 0, 0.1);
        `)
        const h3 = loan.querySelectorAll("h3");
        expect(h3[0]).toHaveStyle(`
        font-size: 1.8vw;
        color: #666;
        margin-bottom: 0.5vw;
        `)
    })
})