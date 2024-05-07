//import React from "react";
import Login from "./login"
import About from "./about"
import Home from "./home"
import Getrecommendation from "./getrecommendation1"
import Flowers from "./shop"
import React, { useState } from 'react';
import './help.css';
import {FaHeart} from "react-icons/fa"
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
const Help = () => {
    return (
        <div>
        <header>
                    <input type="checkbox" name="" id="toggler"/>
                    <label for="toggler" class="fas fa-bars"></label>

                    <a href="#" class="logo"/>
                        <h1 class="heading"><span>Petal Pathway</span></h1>
                    <nav class="navbar">
                        <a href="home">Home</a>
                        <a href="about">About Us</a>
                        <a href="shop">Flower</a>
                        <a href="getrecommendation">Get Recommendation</a>
                        <a href="LogIn">Log In</a>
                        <a href="help">Help </a>
                    </nav>

                    <div class="icons">
                        <Link to= "/favorites">
                            <FaHeart size= {24}/>
                        </Link>
                        <Link to="/cart" >
                            <ShoppingCart size={32}/>
                        </Link>
                        <a href="#" class="fas fa-user"></a>
                    </div>
                </header>
        <div className="help-container">
          <h1>Help</h1>
          <p>Welcome to our Flower Shop Help page. Here you can find answers to frequently asked questions.</p>
          <h2>FAQs</h2>
          <div className="faq">
            <h3>1. How do I place an order?</h3>
            <p>To place an order, simply browse our selection of flowers, select the ones you like, and add them to your cart. Then proceed to checkout and follow the instructions to complete your purchase.</p>
          </div>
          <div className="faq">
            <h3>2. Do you offer same-day delivery?</h3>
            <p>Yes, we offer same-day delivery for orders placed before 2:00 PM local time. Orders placed after that time will be delivered the next day.</p>
          </div>
          <div className="faq">
            <h3>3. Can I track my order?</h3>
            <p>Yes, you will receive a tracking number via email once your order has been shipped. You can use this tracking number to track the status of your delivery.</p>
          </div>
          <div className="faq">
            <h3>4. What if I need to change or cancel my order?</h3>
            <p>If you need to change or cancel your order, please contact our customer service team as soon as possible. We'll do our best to accommodate your request.</p>
          </div>
          <div className="faq">
            <h3>5. How can I contact customer support?</h3>
            <p>You can contact our customer support team by phone at 1-800-FLOWER or by email at petalpathway@gmail.com. Our team is available to assist you from 9:00 AM to 5:00 PM, Monday through Friday.</p>
          </div>
          <div className="faq">
            <h3>6. How can I track my order?</h3>
            <p>Once your order has been processed and shipped, you will receive a tracking number via your email.</p>
          </div>
        </div>

        <section class="contact">
                    <div class="contact-box">
                        <h4>INFORMATION</h4>
                        <li><a href="/privacypage">Privacy Page</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/deliveryinformation">Delivery Information</a></li>
                        <li><a href="/term">Term & Conditions</a></li>
                    </div>

                    <div class="contact-box">
                        <h4>CUSTOMER SERVICE</h4>
                        <li><a href="/policy">Shipping Policy</a></li>
                        <li><a href="/help">Help & Contact Us</a></li>
                        <li><a href="/return">Returns & Refunds</a></li>
                        <li><a href="/term">Term & Conditions</a></li>
                    </div>
                </section>

        </div>
    
  
        /**<div>
            <header>
                    <input type="checkbox" name="" id="toggler"/>
                    <label for="toggler" class="fas fa-bars"></label>

                    <a href="#" class="logo"/>
                        <h1 class="heading"><span>Petal Pathway</span></h1>
                    <nav class="navbar">
                        <a href="home">Home</a>
                        <a href="about">About Us</a>
                        <a href="flower">Flower</a>
                        <a href="getrecommendation">Get Recommendation</a>
                        <a href="LogIn">Log In</a>
                        <a href="help">Help </a>
                    </nav>

                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-shopping-cart"></a>
                        <a href="#" class="fas fa-user"></a>
                    </div>
                </header>


                

                <section class="contact">
                            <div class="contact-box">
                                <h4>INFORMATION</h4>
                                <li><a href="#">Privacy Page</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Term & Conditions</a></li>
                            </div>

                            <div class="contact-box">
                                <h4>CUSTOMER SERVICE</h4>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Help & Contact Us</a></li>
                                <li><a href="#">Returns & Refunds</a></li>
                                <li><a href="#">Term & Conditions</a></li>
                            </div>
                    </section>
               
                        <a href="#" class="scroll-top"><i class='bx bx-chevrons-up'></i></a>

                        <div class="end-text">
                            <p>late 2024 Adam, Mai and Rae. All Rights Reserved.</p>
                        </div>
        </div>**/
        
    );
};
export default Help;