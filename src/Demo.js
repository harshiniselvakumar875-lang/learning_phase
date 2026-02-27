import React from 'react'
import {useState} from 'react'
import './Demo.css'
const Demo=()=>{
      return(
       < center>
           <div className='Name'>
                <h2>Login Page</h2>
                <p><b>More offers and useful for building your knowledgeable skills</b></p>
                <form className="new">
                   <div><label><b>Name:</b></label><input type="email" placeholder='Enter your email'/></div><br/>
                   <div><label><b>Phone Number:</b></label><input type='tel' placeholder='Enter your number'></input></div><br/>
                   <div><label><b>Password:</b></label><input type="password" placeholder='Enter your password'></input></div><br/>
                    
                    <center>  <button className='Login' type='submit'>Login</button></center><br/>
                      <div><a href='#' className='forget'>Forget Password?</a></div><br></br>
                      <br/>
                      <div><br/>
                <button className="button"> G </button>
                <button className="button"> f </button>
                <button className="button">  </button>
            </div>
                </form>
           </div>
       </center>
      )
}
export default Demo