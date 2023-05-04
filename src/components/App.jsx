import React from "react";
import Login from "./Login";


var userIsRegister = false;

// function renderLog (){
//   if(isLoggrdIn === true){
//     return <h1>Hello</h1>
//   } else{
//     return(
//       <Login />
//     );
//   }
// }
const currentTime = new Date(2010, 11, 1, 14).getHours();
console.log(currentTime);

function App(){
  return (
    <div className="container">
      <Login  isRegister ={userIsRegister} />
    
    {/* ---&& in React---
      ---CONDITION && EXPRESSION---
      ---TRUE/FALSE && EXPRESSION---
    currentTime > 12 && <h1>why you are Still working?</h1> */ }
    </div>
  );
}

export default App;