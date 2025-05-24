import { useState } from "react";
const User = (props)=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return <><div>
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <h2>Name : {props.name} - (function) </h2>
        <h3>Location : {props.location} </h3>
        <h4>Contact : {props.contact}</h4>
    </div>
    <hr/>
    </>
}

export default User;