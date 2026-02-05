
import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";



const Header = () => {
    const [isLoggedin, setIsloggedIn] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const {loggedInUserName} = useContext(UserContext);

    const cartItems =  useSelector((store)=>store.cart.items);

    return (
        <div className="flex flex-wrap border-2 p-4 m-4 justify-between">
            <div className="logo-container">
                <img className="logo" alt="logo"
                src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex flex-wrap m-4 p-4">
                    <li className="m-4 p-4">Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <li className="m-4 p-4">
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li className="m-4 p-4"><Link to ="/about">About Us</Link></li>
                    <li className="m-4 p-4"><Link to ="/contact">Contact US</Link></li>
                    <li className="m-4 p-4"><Link to="/grocery">Grocery</Link></li>
                    <li data-testid="cartHeader" className="m-4 p-4 font-bold"><Link to="/cart">Cart - ({cartItems.length} - items)</Link></li>
                    <button className="className=m-4 p-4" onClick={() => {
                        isLoggedin === "Login" ? setIsloggedIn("Logout") : setIsloggedIn("Login")
                    }}>{isLoggedin}</button>
                    <li className="m-4 p-4">{loggedInUserName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
