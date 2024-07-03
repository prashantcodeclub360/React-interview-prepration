// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [color , setColor] = useState("RED");

//     const changeColor = () => {
//         setColor("BLUE")
//     } 
    
  
  
  
  
  
//     return (
//     <>
//     <h1>My favourite color is {color}!</h1>
//     <button onClick={changeColor}>Change color!</button>
//     </>
//   )
// }

// export default App  
// Example 2 :

// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [ car , setCar] = useState({
//         Year:"2023",
//         color:"blue",
//         brand:"BMW"
//     });
//     const ChangeCar = () => {
//         setCar({Year:"2024",color:"Red",brand:"Aulto"})
//     }



//   return (
//     <>
//     <h1>This {car.Year} I buy a new {car.color}  {car.brand} Car !  </h1>
//     <button onClick={ChangeCar} >Change car !</button>
    
//     </>
//   )
// }

// export default App
// Example 3

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [value , SetValue] = useState(0);

//     const increment = () => {
//         SetValue(value+1);
//     }


//   return (
//     <>
//     <center>
//         <h1>Counter value {value}</h1>
//         <button onClick={increment}>Change value</button>
//     </center>
    
//     </>
//   )
// }

// export default App

// Example of useEffect 1
// import React, { useState } from 'react'
// import { useEffect } from 'react'

// function App() {

//     const [value,SetValue] = useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             SetValue(value => value+1);
//         },2000)
//     })


//   return (
//     <center>
//         <h1>I have render the number {value} times!</h1>
//     </center>
//   )
// }

// export default App
// //  useRef example 
// import React, { useEffect, useRef, useState } from 'react'

// function App() {
  
//   const [value , setValue] = useState(0);
//   const count = useRef(0);

//   useEffect(()=>{
//     count.current = count.current + 1;
//   });
 
  
  
  
//     return (
//   <>
//   <center>
//     <button onClick={()=>{setValue(prev =>prev +1)}}>ADD +1</button>
//     <h1>{value}</h1>
//     <button onClick={()=>{setValue(prev => prev-1)}}>SUB -1</button>
//     <h2>Render Count : {count.current} </h2>
//   </center>
  
  
//   </>
//     )
// }

// export default App
