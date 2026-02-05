import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test ("should render the login button in the header component", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button", {name: "Login"});

    expect(button).toBeInTheDocument();
 });

 test ("should render the logout button on click of login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button", {name: "Login"});

    fireEvent.click(button);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
 });