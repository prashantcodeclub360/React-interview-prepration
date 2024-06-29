import React from "react";
import  "./App.css";

// const  Data = (props) => {
//   return(
//     <>
//     <h1>Name : {props.name}</h1>
//     <h2>Age : {props.age}</h2>
//     <h3>City : {props.city}</h3>
//     </>
//   )
// }
// const App = () => {
//     return (
//         <div className="App">
//           <Data
//            name = "Prashant"
//            age = {24}
//            city = "Agra"

//           />
//           <Data
//            name = "sudhanshu"
//            age = {17}
//            city = "delhi"

//           />
//         </div>



//     )
// };

//  now uses of props and compoets 

const App = () => {

        function Car(props) {
            return(
                <>
                <h1>Hey This is my first Car{props.brand}</h1>
                <h2>Hey This is my first Car{props.brand}</h2>
                <h3>Hey This is my first Car{props.brand}</h3>
                </> 
            )
        }
        
        
        
       
    }
    const model = 
    
            <Car brand = "BMW" />

export default App;