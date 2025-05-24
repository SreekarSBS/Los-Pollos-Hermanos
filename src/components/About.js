import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return <div>
        <h1>About Us</h1>
        <p>This is a restaurant app built using React.</p>
       <div>
        <User name = {"Sreekar"} location = {"Pune"} contact = {"abc@sbs.com"} />
       </div>
        <div>
            <UserClass name = {"Sreekar"} location = {"Pune"} contact = {"abc@sbs.com"}/>
        </div>
       <div></div>
    </div>
}

export default About;