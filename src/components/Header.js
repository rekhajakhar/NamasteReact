
import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [isLoggedin, setIsloggedIn] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo"
                src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/contact">Contact US</Link></li>
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
