import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import UserContext from "./utils/UserContext"
import Error from "./components/Error"
import Contact from "./components/Contact"
import ResInfo from "./components/ResInfo"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"






const AppLayout = () =>{
    const [userName , setUserName] = useState();

useEffect(()=> {
    const data = {
        name : "Sreekar"
    }
        setUserName(data.name);
    
},[]);

    return <Provider store = {appStore}>
    <UserContext.Provider value = {{defaultUser : userName ,setUserName }}>
    <div>
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
};



const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        children : [
            {
                path : "/",
                element: <Body/>,
            },
            {
                path : "/about",
                element: <Suspense fallback = {<h1>Loading ...</h1>}><About/></Suspense>,
            },
            {
                path : "/contact",
                element: <Contact/>,
            },
            {
                path : "/restaurants/:resId",
                element: <ResInfo/>,
            },
            {
                path : "/cart",
                element: <Cart/>,
            }
        ],
        errorElement: <Error/>
    },
   
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)