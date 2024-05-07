import React from "react";
//import logo from "./logo.svg";
import './about.css';
import Home from "./home"
import Login from "./login"
import Flowers from "./shop"
import Getrecommendation from "./getrecommendation1"
import Help from "./help"
import {FaHeart} from "react-icons/fa"
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
//import rae from '../assets/rae.jpeg'


export default function About(){
    //reder(){
        return(
            
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

                <section class="about" id="about">
                    <h1 class= "heading1"> <span>About</span> Us </h1>
                    <div class ="row">
                        <div class="img-container">
                            <img src= "../assets/flowers/petalpathway.jpg" alt=" "/>
                        </div>

                        <div class="content">
                            <h3>Why choose us?</h3>
                            <p>Welcome to Petal Pathway, where every bloom tells a story and every arrangement is a masterpiece. 
                                Nestled in the heart of North Hill, Pittsburgh, our flower shop is more than just a destination for floral delights; it's a journey through nature's most exquisite creations</p>
                            <p>At Petal Pathway, we believe in the power of flowers to convey emotions, celebrate moments, and brighten days.
                                Whether you're marking a special occasion, expressing gratitude, or simply indulging in the beauty of blooms, our handcrafted arrangements are designed to captivate and enchant.</p>
                            <p>Step into our floral haven and explore a kaleidoscope of colors, textures, and fragrances. From classic roses to exotic orchids, each stem is carefully selected for its quality and charm. 
                                Our talented florists bring passion and creativity to every bouquet, ensuring that each creation is a reflection of your unique style and sentiment.</p>
                        </div>
                           
                    </div>
                </section>

                <section class="admin" id="admin">
                    <h1 class="heading1"> Our<span>Team</span></h1>
                    <div class="box-contain">
                        <div class="box">
                        <p>As an admin for the front end of a flower shop website, my role involves managing the visual and interactive elements 
                            of the website that customers see and interact with. I design the layout of the website to ensure an attractive and user-friendly interface. 
                            This involves choosing colors, fonts, images, and other design elements that create a visually appealing experience for visitors. </p>
                        <div class="user">
                            <img src="../assets/flowers/mai.jpg" alt=""></img> 
                            <div class="admin-info">
                                <h3>Mai Ngo</h3>
                            </div>
                        </div>
                        </div>

                        <div class="box">
                        <p>In our project Petal Pathway, I focused on developing the backend logic, particularly for functionalities like the browse page and the checkout process. Collaborating closely with the team, I ensured seamless integration between the backend and frontend systems, facilitating efficient communication and interaction throughout the application. </p>
                        <div class="user">
                            <img src="./assets/flowers/rae.jpeg" alt=""></img> 
                            <div class="admin-info">
                                <h3>Rewanta Dheungana</h3>
                            </div>
                        </div>
                        </div>

                        <div class="box">
                        <p>As a developer for the petal pathway application, I am responsible for writing backend codes for the login/registration logic, as well as storing this values in the database. I am responsible for all database configuration for users, flowers, and orders making sure all information is stored and retrieved properly </p>
                        <div class="user">
                            <img src="../assets/flowers/adam.png" alt=""></img> 
                            <div class="admin-info">
                                <h3>Adam Kramer</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </section>

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
               
                        <a href="#" class="scroll-top"><i class='bx bx-chevrons-up'></i></a>

                        <div class="end-text">
                            <p>late 2024 Adam, Mai and Rae. All Rights Reserved.</p>
                        </div>
            </div>
        )       
    //}
}

