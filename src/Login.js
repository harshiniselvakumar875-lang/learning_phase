import React from 'react';
import './Login.css'
const Login=()=>{
    return(
        <center> 
        <div className='Name'>   
         
        <h2>Sign in with email</h2>
        <p>Make a database with json and document</p>
        <form className='form-control'>
            <div>📧<input type="email" placeholder='Enter your Email'/></div><br></br>
            <div>🔒<input type="password" placeholder='Enter your Password'/></div><br></br>
           <div><a href="#" className='forget'>Forgot Password?</a><br></br>
            <button type="submit">Login</button></div>
            
        </form>
        
        </div>
        </center>
    )
}
export default Login