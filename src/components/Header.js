
import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [isLoggedin, setIsloggedIn] = useState("Login")
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo"
                src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/contact">Contact US</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        isLoggedin === "Login" ? setIsloggedIn("Logout") : setIsloggedIn("Login")
                    }}>{isLoggedin}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
