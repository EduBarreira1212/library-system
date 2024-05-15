import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Register from "../routes/Register"
import { BrowserRouter } from "react-router-dom";

describe("Register component", () => {
    test("render component", () => {
        render(<BrowserRouter><Register/></BrowserRouter>);
        const h1 = screen.getByText("Register");
        expect(h1).toBeInTheDocument();
    })
})