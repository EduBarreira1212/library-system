import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import Register from "../routes/Register"
import { BrowserRouter } from "react-router-dom";

describe("Register component", () => {
    test("render component", () => {
        render(<BrowserRouter><Register/></BrowserRouter>);
        const h1 = screen.getByText("Register");
        const label = screen.getByText("Name:");
        const btn = screen.getByText("loan the book");
        expect(h1).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    })
    test("displays error messages for invalid data", async () => {
        render(<BrowserRouter><Register/></BrowserRouter>);
        const nameInput = screen.getByPlaceholderText("Ex: Brian");
        const btn = screen.getByText("loan the book");
        fireEvent.change(nameInput, {target: {value: ""}});
        fireEvent.click(btn);
        const errorMessage = await screen.findByText("Name is required");
        expect(errorMessage).toBeInTheDocument();
    })
})