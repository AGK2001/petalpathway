//import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Shop from "./pages/shop"
import Help from "./pages/help"
import Getrecommendation from "./pages/getrecommendation"
//import {Addtocart} from "./pages/addtocart";
import { ShopContextProvider } from './pages/shop-context';
//import Shop from "./pages/shop";
import Addtocart from './pages/addtocart';
import Cart from './pages/cart';
import { Navbar } from './pages/navbar';
import PrivacyPage from './pages/privacypage';
import DeliveryInformation from './pages/deliveryinformation';
import TermsAndConditions from './pages/term';
import Checkout from './pages/Checkoutt'
import ShippingPolicy from './pages/policy';
import ReturnRefundPolicy from './pages/return';
import { Flower } from 'phosphor-react';
import Register from './pages/register';
class App extends React.Component{
  /**constructor(props){
    super(props);
    this.state={apiResponse: ""};
  }
  callAPI(){
    fetch("http//localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
  }

  componentWillMount(){
    this.callAPI();
  }
**/
render(){
  return(
    <div>
      <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/home" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/shop" element = {<Shop />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/getrecommendation" element = {<Getrecommendation />} />
          <Route path="/help" element = {<Help />} />
          <Route path= "/addtocart" element ={<Addtocart />}/>
          
          <Route path= "/cart" element = {<Cart />} />
          <Route path="/privacypage" element = {<PrivacyPage />} />
          <Route path="/deliveryinformation" element = {<DeliveryInformation />} />
          <Route path="/term" element = {<TermsAndConditions />} />
          <Route path="/checkoutt" element = {<Checkout/>} />
          <Route path = "/policy" element = {<ShippingPolicy/>}/> 
          <Route path = "/return" element = {<ReturnRefundPolicy/>}/> 

         </Routes> 
      </BrowserRouter>
      </ShopContextProvider>
      
    </div>
  );
  }
}

export default App;
