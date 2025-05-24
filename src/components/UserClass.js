import React, { useLayoutEffect } from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
    
    this.state = {
        userInfo : {
        name : "Dummy",
        id : "1"
        }
    }
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/SreekarSBS");
    const json = await data.json();   
    this.setState({
        userInfo : json
       })
    // this.timer = setInterval(() => {
    //     console.log("Hello");
        
    // },1000)
}

componentDidUpdate(){
    console.log("Component updated");
}

componentWillUnmount(){
    // clearInterval(this.timer);
    console.log("Component unmounted");
    
}
    
    render(){
        
        const {name , id}  =this.state.userInfo;
      
        return <div>
            
            
            <h2>Name : {name} - (class) </h2>
            <h3>Location : {id} </h3>
            {/* <h4>Contact : {this.props.contact}</h4> */}
        </div>
    }
}

export default UserClass;

