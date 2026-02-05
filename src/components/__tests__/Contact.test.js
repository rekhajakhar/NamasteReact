import Contact from "../Contact";
import {render, screen}  from "@testing-library/react";
import "@testing-library/jest-dom";

describe("include 1 specific set of testcases here have diff describs for diff types of uts",()=>{

   //below are helper functions works as the name says.
   beforeAll(()=>{

   });

   beforeEach(()=>{

   });

   afterAll(()=>{

   });
   afterEach(()=>{

   });

    test("render contact component",()=>{
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument(); // install npm i -D @testing-library/jest-dom for these expect methods
    
     });
    
     it("count text boxes on the contact component",()=>{
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2); // install npm i -D @testing-library/jest-dom for these expect methods
    
     });
    
     it("test submit button on the contact component",()=>{
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument(); // install npm i -D @testing-library/jest-dom for these expect methods
    
     });

});

