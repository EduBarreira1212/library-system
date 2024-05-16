import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ShowList from "../routes/ShowList"
import { BrowserRouter } from "react-router-dom";

describe("show list component", () => {
    test("render loading component", () => {
        render(<BrowserRouter><ShowList/></BrowserRouter>);
        const loading = screen.getByText("Loading...");
        expect(loading).toBeInTheDocument();
    })
    test("render component", async () => {
        render(<BrowserRouter><ShowList/></BrowserRouter>);
        const label = await screen.findByText("Filter:");
        const label2 = await screen.findByText("Filter by:");
        const cpf = await screen.findByText("CPF");
        const date = await screen.findByText("Date");
        const publication = await screen.findByText("Publication year");
        const btn = await screen.findByText("Register a loan");
        expect(label).toBeInTheDocument();
        expect(label2).toBeInTheDocument();
        expect(cpf).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(publication).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    })
})