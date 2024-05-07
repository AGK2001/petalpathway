// import React, {useState, useEffect} from 'react';
// import Login from "./login"
// import About from "./about"
// import Home from "./home"
// import Getrecommendation from "./getrecommendation"
// import Help from "./help"
// import data from "../pages/data"
// import './flower.css';
// import axios from 'axios';
// export default function Flower(){
//     const [flowers, setFlowers] = useState([]);

//   useEffect(() => {
//     // Fetch flower data from the backend server when the component mounts
//     axios.get('http://localhost:3000/') // Make a GET request to your Express server
//       .then(response => {
//         setFlowers(response.data); // Update the state with the fetched flower data
//       })
//       .catch(error => {
//         console.error('Error fetching flower data:', error);
//       });
//   }, []);
//     return(
//         <div>
//             <header>
//                     <input type="checkbox" name="" id="toggler"/>
//                     <label for="toggler" class="fas fa-bars"></label>

//                     <a href="#" class="logo"/>
//                         <h1 class="heading"><span>Petal Pathway</span></h1>
//                     <nav class="navbar">
//                         <a href="home">Home</a>
//                         <a href="about">About Us</a>
//                         <a href="flower">Flower</a>
//                         <a href="getrecommendation">Get Recommendation</a>
//                         <a href="LogIn">Log In</a>
//                         <a href="help">Help </a>
//                     </nav>

//                     <div class="icons">
//                         <a href="#" class="fas fa-heart"></a>
//                         <a href="#" class="fas fa-shopping-cart"></a>
//                         <a href="#" class="fas fa-user"></a>
//                     </div>
//             </header>

                

//                         <section class="contact">
//                             <div class="contact-box">
//                                 <h4>INFORMATION</h4>
//                                 <li><a href="#">Privacy Page</a></li>
//                                 <li><a href="#">About us</a></li>
//                                 <li><a href="#">Delivery Information</a></li>
//                                 <li><a href="#">Term & Conditions</a></li>
//                             </div>

//                             <div class="contact-box">
//                                 <h4>CUSTOMER SERVICE</h4>
//                                 <li><a href="#">Shipping Policy</a></li>
//                                 <li><a href="#">Help & Contact Us</a></li>
//                                 <li><a href="#">Returns & Refunds</a></li>
//                                 <li><a href="#">Term & Conditions</a></li>
//                             </div>
//                         </section>
               
//                         <a href="#" class="scroll-top"><i class='bx bx-chevrons-up'></i></a>

//                         <div class="end-text">
//                             <p>late 2024 Adam, Mai and Rae. All Rights Reserved.</p>
//                         </div>

//         </div>
//     )
// }