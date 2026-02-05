import Body from "../Body";
import {render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResList.json";
import "@testing-library/jest-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom"
//mocking fetch function

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("should search of burger in the res list",async ()=>{

    await React.act(async ()=>{
        render(<BrowserRouter><Body/></BrowserRouter>);
    });
    
    //test search feature
    //get the cards count from mock data 1st & assert on it.
    // add data-testid for this
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button",{name: "Search"});

    const searchText = screen.getByTestId("searchInputBox");

    fireEvent.change(searchText,{target:{value:"burger"}});
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);

 });


 test("should filter the top rated restaurants",async ()=>{

    await React.act(async ()=>{
        render(<BrowserRouter><Body/></BrowserRouter>);
    });
    
    //test search feature
    //get the cards count from mock data 1st & assert on it.
    // add data-testid for this
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const filterBtn = screen.getByRole("button",{name: "Filter Top Rated Restaurants"});

    fireEvent.click(filterBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(6);

 });