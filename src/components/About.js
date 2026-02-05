//import React from "react";
import {Component, Consumer} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props) {
        super(props);
        this.state={
            userInfo:{
                login:"dummy",
                location:"default",
                
            }
        }
    }

    async componentDidMount(){
        //api calls
        const data = await fetch("https://api.github.com/users/rjakhar");
        const json = await data.json();
        this.setState({
            userInfo : json
        });
        //.log(json);
    }

    render(){
        const {login, location, avatar_url} = this.state.userInfo;
        return(
            <div>
                <h1>About Us (class component)</h1>
                <div>LoggedIn User:
                <UserContext.Consumer>
                    {({loggedInUserName})=><h1>{loggedInUserName}</h1>}
                </UserContext.Consumer>
                </div>
                <h2>This is my react practice (class component)</h2>
                {/*<User name={"Rekha Jakhar (functional)"} place={"Bengaluru (functional)"}/>*/}
                <img src={avatar_url}/>
                <h2>{login}</h2>
                <h3>{location}</h3>
                <UserClass name={"Rekha Jakhar class"} place={"Bengaluru class"}/>
            </div>
        )
    }
}

/*
const  About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is my react practice</h2>
        </div>
    )
}
*/
export default About;