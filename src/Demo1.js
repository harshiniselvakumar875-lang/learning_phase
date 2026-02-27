import React from "react";
import {useState} from 'react';
import './Demo1.css';
const Demo1=()=>{
    const[count,setCount]=useState(true);
    function change(){
           setCount(!count)
           console.log(count)
    }
    return(
        <div classNme='counter'>
         <h1>{count ? "true":"false"}</h1>
        <div className={count?"box-white":"box-black"}>
        </div>

        <button onClick={change} className="btn-counter">Dark/White</button>
        </div>
    )

}
export default Demo1