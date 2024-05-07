import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User  } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    const [cartItemCount, setCartItemCount] = useState(0);
  const incrementCartItemCount = () => {
    setCartItemCount(cartItemCount + 1);
  };
  return (
    <div className="navbar">
                    <input type="checkbox" name="" id="toggler"/>
                    <label for="toggler" class="fas fa-bars"></label>
                    <a href="#" class="logo">
                        <h1 class="heading"><span>Petal Pathway</span></h1>
                    </a>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/home">Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/shop">Flower </Link>
        <Link to="/getreccommendation">Get Recommendation</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/help">Help </Link>
        <Link to = "/like">
            <Heart size={32} />
        </Link>
        <Link to="/cart" onClick={incrementCartItemCount} >
            <ShoppingCart size={32}/>
            {cartItemCount > 0 && (
            <span className="badge">{cartItemCount}</span>
          )}
        </Link>
        <Link to="/LogIn" >
            <User size={32}/>
        </Link>               
      </div>
    </div>
  );
};