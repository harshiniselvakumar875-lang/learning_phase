import React from 'react'
import  {useState}  from 'react'
import './Counter.css'

const Counter=()=>{
    const [count,setCount]= useState(1);
    const[str,setStr]=useState("true");
    function logs(){
        setCount(count+1);
    }
    return(
        <div>
          <h1>{count}</h1>
          <button className='btn-counter'  onClick={logs}> Click</button>
          
        </div>
    )
}

// const Counter=()=>{
//     const [count,setCount]= useState(100);
//     function logs(){
//         setCount(count+1);
//     }
//     return(
//         <div>
//           <h1>{count}</h1>
//           <button className='btn-counter'  onClick={logs}> Click</button>
//         </div>
//     )
// }
// const Counter=()=>{
//     const [str,setStr]= useState("Harshini");
//     function logs(){
//         setStr("Harshu");
//     }
//     return(
//         <div>
//           <h1>{str}</h1>
//           <button className='btn-counter'  onClick={logs}> Update</button>
//         </div>
//     )
// }

// const Counter=()=>{
//     const [value,setvalue]= useState(2);
//     const[str1,setStr1]=useState("Harshu");
//     function logs(){
//         setStr1("Ammu");
//     }
//     function names(){
//         setvalue(value*2);
//     }
//     return(
//         <div>
//           <h1> {str1}</h1>
//           <button className='btn-counter' onClick={logs}>Update</button>
//            <h1>{value}</h1>
//           <button className='btn-counter'  onClick={names}> Click</button>
//         </div>
//     )
// }
// const Counter=()=>{
//     const [str,setStr]= useState(1);
//     const [furniture,setfurniture]= useState({
//         available:true,
//         name:"chair",
//         screw:100,
//         wheels:50,
//         seat:50,
//         price:1000

//     })
//     console.log(furniture)
//     function logs(){
//         setfurniture({
//             ...furniture,
//             wheels:100
//         })
//     }
//         console.log(furniture);
    
//     return(
//         <div className='counter'>
//             <center>
//           <h1>Name of the furniture:{furniture.name}</h1><br/>
//           <h1>No of Screw:{furniture.screw}</h1>
//           <h1>No of wheel:{furniture.wheel}</h1>
//           <h1>No of seat:{furniture.seat}</h1>
//           <h1>No of price:{furniture.price}</h1>
//           <button className='btn-counter'  onClick={logs}> Click</button>
//           </center>
//         </div>
//     )
// }
export default Counter