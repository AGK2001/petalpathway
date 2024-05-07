import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flower } from "../pages/flower.jsx";
import "../pages/shop.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Shop = () => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/petalpathway/browse")
            .then(response => {
                setFlowers(response.data.flowers);
            })
            .catch(error => {
                console.error("Error fetching flowers:", error);
            });
    }, []);
                    

    return (
        <div className="shop">
            <header>
                <input type="checkbox" name="" id="toggler" />
                <label htmlFor="toggler" className="fas fa-bars"></label>

                <a href="#" className="logo" />
                <h1 className="heading"><span>Petal Pathway</span></h1>
                <nav className="navbar">
                    <a href="home">Home</a>
                    <a href="about">About Us</a>
                    <a href="shop">Flower</a>
                    <a href="getrecommendation">Get Recommendation</a>
                    <a href="LogIn">Log In</a>
                    <a href="help">Help </a>
                </nav>

                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <Link to="/cart">
                        <ShoppingCart size={32} />
                    </Link>
                    <a href="#" className="fas fa-user"></a>
                </div>
            </header>
            <div className="shopTitle">
                <h1>Petal Pathway</h1>
            </div>

            <div className="flowers">
                {flowers.map((flower) => (
                    <Flower data={flower} key={flower.flowerID} />
                ))}
            </div>
        </div>
    );
}

export default Shop;
