import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Loan from "../components/Loan"

describe("Loan component", () => {
    test("render loan", () => {
        const data = { name: "Eduardo",
            cpf: "111.111.111-11",
            email: "edu@gmail.com",
            phone: "(85)11111-2222",
            title: "Harry Potter",
            author: "JK",
            publisher: "JK cia",
            publicationYear: 1950,
            loan: new Date()}
        render(<Loan>{data}</Loan>)
        const loan = screen.getByText("Eduardo");
        expect(loan).toBeInTheDocument();
    })
})