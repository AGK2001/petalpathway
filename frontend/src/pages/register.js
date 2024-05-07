import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css"

function Register(){
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const navigate = useNavigate();
  
    const register = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:5000/petalpathway/auth/register",{
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
        city: city,
        state: state,
        zip: zip,
      }).then((response) => {
        if(response.data.message){
          setRegisterStatus(response.data.message);
        }else{
          //setRegisterStatus("Account created successfully");
          navigate('/login');
        }
      })
    }

    return(
        <div className="login-form">
        <div className="wrapper">
          <form>
            <h4>Register</h4>
            <div className="input-box">
                <label htmlFor="firstName">First Name</label>
                <input className="textInput" type="text" name="firstName" onChange={(e) => {setFirstName(e.target.value)}} placeholder="Enter First Name" required/>
            </div>
            <div className="input-box">
                <label htmlFor="lastName">Last Name</label>
                <input className="textInput" type="text" name="lastName" onChange={(e) => {setLastName(e.target.value)}} placeholder="Enter Last Name" required/>
            </div>
            <div className="input-box">
                <label htmlFor="email">Email</label>
                <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter Valid Email" required/>
            </div>
            <div className="input-box">
                <label htmlFor="password">Password</label>
                <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter Password" required/>
            </div>
            <div className="input-box">
                <label htmlFor="address">Address</label>
                <input className="textInput" type="text" name="address" onChange={(e) => {setAddress(e.target.value)}} placeholder="Enter Street Address" required/>
            </div>
            <div className="input-box">
                <label htmlFor="username">City</label>
                <input className="textInput" type="text" name="city" onChange={(e) => {setCity(e.target.value)}} placeholder="Enter City" required/>
            </div>
            <div className="input-box">
                <label htmlFor="username">State</label>
                <input className="textInput" type="text" name="state" onChange={(e) => {setState(e.target.value)}} placeholder="Enter State" required/>
            </div>
            <div className="input-box">
                <label htmlFor="zip">Zip</label>
                <input className="textInput" type="text" name="zip" onChange={(e) => {setZip(e.target.value)}} placeholder="Enter Zip Code" required/>
            </div>
            <input className="button" type="submit" onClick={register} value="Create Account"/>
            <h1 style = {{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
          </form>
          </div>
        </div>
        
    )
}

export default Register;