import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");


    const {setUser}=useContext(UserContext);

const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({username,password});
     setUsername("");
    setPassword("");
}
   return(
<div>
    <h2>Log in </h2>
    <div className="form">
        <input type="text" 
        placeholder="Enter user name"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        
        />
        <br />
        <input type="text" 
        placeholder="Enter password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}

        />
        <button onClick={handleSubmit}>Log In</button>
    </div>
</div>
   )
}
export default Login