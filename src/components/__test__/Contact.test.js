import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import  "@testing-library/jest-dom"


    describe("Contact Component Testing", () => {

    test("Testing Contact h1 render", () => {
        //render
        render(<Contact/>);

        //Query
       const heading = screen.getByRole("heading");
       //Assertion
       expect(heading).toBeInTheDocument();
    })

    test("Testing Contact button render", () => {
        render(<Contact/>);

        //Assertion
       const button = screen.getByText("Submit");
       expect(button).toBeInTheDocument();
    })


    test("Testing Contact input render", () => {
        //render
        render(<Contact/>);

        //Query 
       const inputBoxes = screen.getAllByRole("textbox");
       //Assertion
       expect(inputBoxes.length).toBe(2);
    })
});