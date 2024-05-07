import React from "react";
import Login from "./login"
import About from "./about"
import Flowers from "./shop"
import Getrecommendation from "./getrecommendation"
import Help from "./help"
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import PrivacyPage from "./privacypage";
import TermsAndConditions from "./term";
import {FaHeart} from "react-icons/fa"
import { FLOWERS } from "../pages/data"
class Home extends React.Component{
    state = {
        flowers: FLOWERS.map((flower) => ({ ...flower, isFavorite: false })),
        favorites: [],
      };

      toggleFavorite = (flowerID) => {
        this.setState((prevState) => {
          const updatedFlowers = prevState.flowers.map((flower) => {
            if (flower.flowerID === flowerID) {
              return { ...flower, isFavorite: !flower.isFavorite };
            }
            return flower;
          });
    
          const updatedFavorites = updatedFlowers.filter(
            (flower) => flower.isFavorite
          );
    
          return { flowers: updatedFlowers, favorites: updatedFavorites };
        });
      };

    render(){
        const {Flowers}= this.state;
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
                
                <section class="home" id="home">
                    <div class="content">
                        <h3>Petal Pathway</h3>
                        <span>Natural & Beautiful flowers</span>
                        <p>"Petal Pathway" is an online flower shop that offers a delightful and convenient way to brighten someone's day with beautiful floral arrangements. With Petal Pathway, customers can explore a wide variety of fresh and vibrant flowers suitable for any occasion, whether it's a birthday, anniversary, wedding, or just to show someone they're appreciated.</p>

<p>At Petal Pathway, we understand the importance of both quality and convenience. Our website is designed to provide a seamless shopping experience, allowing customers to easily browse through our selection of flowers, plants, and gifts from the comfort of their own home. With detailed product descriptions and stunning visuals, customers can confidently choose the perfect arrangement to express their sentiments.</p>

<p>One of the key features of Petal Pathway is our commitment to customer satisfaction. We prioritize the freshness and quality of our flowers, ensuring that each arrangement is carefully crafted to exceed our customers' expectations. From classic roses to exotic orchids, our talented florists hand-select the finest blooms to create stunning arrangements that convey the perfect message.</p>

                        <a href="#" class="btn">shop now</a>
                    </div>
                </section>


                <section class="products" id="products">
                    <h1 class="heading">Best<span> Sellers</span>
                    </h1>
                    <div class ="box-container">

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/light pink orchid.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3> Pink Pastel Orchid</h3>
                                <div class="price"><span>$12.99</span></div>
                            </div>
                        </div>

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/blue tulip.webp" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3> Blue Tulip</h3>
                                <div class="price"><span>$15.99</span></div>
                            </div>
                        </div>

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/mix flower 6.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3>Mix Flowers</h3>
                                <div class="price"><span>$28.50</span></div>
                            </div>
                        </div>

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/mix of color orchid.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3> Mix Color of Tulips</h3>
                                <div class="price"><span>$16.99</span></div>
                            </div>
                        </div>

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/white daisy.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3>White Daisy</h3>
                                <div class="price"><span>$15.99</span></div>
                            </div>
                        </div>

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/yellow peony.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3> Yellow Peony</h3>
                                <div class="price"><span>$15.99</span></div>
                            </div>
                        </div>

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/mix flower 8.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3>Mix Flowers</h3>
                                <div class="price"><span>$26.99</span></div>
                            </div>
                        </div>

                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/red rose.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3>Red Rose</h3>
                                <div class="price"><span>$20.99</span></div>
                            </div>
                        </div>


                        <div class ="box">
                            <div class="image">
                                <img src="../assets/flowers/mix flowers 1.jpg" alt=""/>
                                <div class="icons">
                                    <a href="#" class="fas fa-heart"></a>
                                    <a href="#" class="cart-btn">add to cart</a>
                                    <a href="#" class="fas fa-share"></a>
                                </div>
                            </div>
                            <div class="content">
                                <h3>Mix Flowers</h3>
                                <div class="price"><span>$27.99</span></div>
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
    }
}    

export default Home;