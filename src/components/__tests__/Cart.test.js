// test the functionality of cart when items are added to it from RestuarantMenu comp.
// ex. when items are added in cart & cart clear button test

import {render, screen, fireEvent} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_RES_MENU from "../mocks/mockResMenu.json";
import React from "react";
import appStore from "../../utils/appStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
       json: ()=>{
        return Promise.resolve(MOCK_RES_MENU);
       }
    });
});

 test ("should test the items in cart", async ()=>{
    await React.act(async ()=>{
        render(<BrowserRouter>
               <Provider store={appStore}>
                 <Header/>
                 <RestaurantMenu/>
                 <Cart/>
               </Provider>
               </BrowserRouter>);
    });
    //click on the accordion header to show the items
    const accHeader = screen.getByText("Starters");
    fireEvent.click(accHeader);
    expect(screen.getAllByTestId("test-itemList").length).toBe(3);

    const addBtn = screen.getAllByRole("button",{name: "Add +"});
    fireEvent.click(addBtn[0]);

    //check the cart in header has 1 item in it "Cart - (1 - items)"
    //const cartHeader = screen.getByTestId("cartHeader");
    const cartContent = screen.getByText("Cart - (1 - items)");
    expect(cartContent).toBeInTheDocument();

    fireEvent.click(addBtn[1]);
    const cartContent2 = screen.getByText("Cart - (2 - items)");
    expect(cartContent2).toBeInTheDocument();

    //now go to the cart component & check the items in it
    //const itemList = screen.getAllByTestId("test-itemList");
    expect(screen.getAllByTestId("test-itemList").length).toBe(5);
    //item list rendered = 5 ; 3 on the restaurant menu page & 2 in the cart page

 });