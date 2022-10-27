import React,{useState} from "react";

const SignUp=()=>{

    //here we have 3 states for 3 form varibales
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    // ask rahul whether these variables can be put in one state or not
    //and which style is good, putting all variables in one single state or separate states

    const collectData=()=>{
        console.log(name,email,password);
    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
            value={name} onChange={(e)=>setName(e.target.value)}
             />
            <input className="inputBox" type="text" placeholder="Enter Email" 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            {/* here on onclick event we are calling the collectData function */}
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}
export default SignUp