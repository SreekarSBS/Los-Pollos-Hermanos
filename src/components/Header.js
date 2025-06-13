import { useContext, useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("Header Rendered");
    
  // Subscribe to the store using a selector
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    useEffect(() =>{
        console.log("useEffect called");
        
    },[isLoggedIn])
  const {defaultUser} = useContext(UserContext);
    return <div className="flex justify-between shadow-lg  bg-pink-100  sm:bg-green-100 ">
        <div className="nav-logo">
            <img className="w-36" src = {LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4" >
               <Link to = "/"><li className="px-6" >Home</li></Link>
               <Link to = "/about"><li className="px-6">About Us</li></Link>
               <Link to = "/contact"><li className="px-6">Contact Us</li></Link>
               <Link to = "/cart"><li className="px-6">Cart ({cartItems.length})</li></Link>
               
               <button onClick={()=> {
                    setIsLoggedIn(!isLoggedIn);
                }} className="Login">
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
                <li className="px-6 font-bold">{defaultUser}</li>
            </ul>
        </div>
    </div>
}
export default Header;