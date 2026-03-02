import React from "react";
import './Demo1.css';


const Demo1=({test:arrobj})=>{
    console.log(arrobj);

    return(
        <>
        <h1>Demo1</h1></>
    )
}
export default Demo1;


// import React from "react";
// import {useState} from 'react';
// import './Demo1.css';
// const Demo1=(arr)=>{
//     const[count,setCount]=useState(true);
//     function change(){
//            setCount(!count)
//            console.log(count)
//     }
//     function name(){
//         setCount(!count)
//         console.log(count)
//     }
//     return(
//         <div className='counter'>
//          <h1>{count ? "true":"false"}</h1>
//         <div className={count?"box-white":"box-black"}>
//         </div>

//         <button onClick={change} className="btn-counter">Dark/White</button>
//         <button onClick={name} />
//         </div>
//     )

// }
// export default Demo1