import { useState } from "react";
import {LOGO_URL} from "../utils/constants";

const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <div className="nav">
        <div className="nav-logo">
            <img src = {LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button onClick={()=> {
                    setIsLoggedIn(!isLoggedIn);
                }} className="Login">
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </ul>
        </div>
    </div>
}
export default Header;