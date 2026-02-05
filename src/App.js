
import React, {lazy, Suspense, useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

  const App = () => {

    const [userName, setuserName]=useState();

    useEffect(()=>{
      //api call & get the user name & set the set variable
      setuserName("Rekha Jakhar");
    },[]);

      return (
        <div>
          <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUserName:userName, setuserName}}>
            <Header/>
            <Outlet/>
          </UserContext.Provider>
          </Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);