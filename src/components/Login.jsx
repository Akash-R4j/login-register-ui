import React from "react";
import Input from "./Input";

function Login(props){
  return(
    <form className="from">
     <Input 
      type = 'text'
      placeholder = 'Username' 
     />
     <Input 
      type = 'password'
      placeholder = 'Password'
     />
     {props.isRegister === false && <Input type = 'password' placeholder = 'Confirm Password' />}
     {/* {props.isRegister ? null : <Input type = 'password' placeholder = 'Confirm Password' />} */}
     <button type="submit">
      {props.isRegister ? 'Login' : 'Register'}
     </button>
    </form>
  )
}

export default Login;