import React, { useState } from "react";
import './login.css';
import Home from "./home";
import About from "./about";
import Flowers from "./shop";
import Getrecommendation from "./getrecommendation1";
import Help from "./help";
//import Validation from "./LoginValidation";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Login(){
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/petalpathway/auth/login",{
      email: email,
      password: password,
    }).then((response) => {
      console.log("Login response:", response.data);
        setLoginStatus(response.data.message);
        if (response.data.message === "User logged in successfully") {
            navigate('/shop');
        }
        setLoginStatus(response.data.message);
    }).catch((error) => {
      console.error("Error logging in:", error);
      if (error.response) {
        // Display backend error message
        setLoginStatus(error.response.data.message);
    } else {
        // Display a generic error message if no response is received
        setLoginStatus("Login failed due to network or server error.");
    }
    })

  };

  return (
    <div>
      <header>
        <input type="checkbox" name="" id="toggler" />
        <label htmlFor="toggler" className="fas fa-bars"></label>

        <a href="#" className="logo" />
        <h1 className="heading"><span>Petal Pathway</span></h1>
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Flower</Link>
          <Link to="/getrecommendation">Get Recommendation</Link>
          <Link to="/login">Log In</Link>
          <Link to="/help">Help</Link>
        </nav>

        <div className="icons">
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
          <a href="#" className="fas fa-user"></a>
        </div>
      </header>

      <div className="login-form">
        <div className="wrapper">
          <form>
            <h4>Login</h4>
            <div className="input-box">
              <label htmlFor="username">Email</label>
              <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter Email" required/>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter Password" required/>
            </div> 
              <input className="button" type="submit" onClick={login} value="Login"/>
              <h1 style = {{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
            <div className='register'>
              <p>Don't have an account?</p>
              <Link to = "/register" className="button">Create Account</Link>
            </div>  
          </form>
          </div>


      </div>
    /</div>
  );
}

export default Login;

