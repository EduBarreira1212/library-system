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
})