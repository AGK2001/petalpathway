import React from 'react'
import './LoginSignup.css'

const LoginSignUp = () => {
  return (
    <div className= 'container'>
    <div className = "header">
        <div className = "text">Sign Up</div>
        <div className= "underline"></div>  
    </div>
    <div className = "inputs">
        <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text"/>
        </div>
        <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text"/>
        </div>
        <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text"/>
        </div>
    </div>
    </div>
  )
}

export default LoginSignUp
