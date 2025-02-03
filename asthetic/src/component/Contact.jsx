import React from "react";
import Navbar from "./NavBar"; 
import "../styles/contactstyle.css"
import Footer from "./footer";
import { Link } from "react-router-dom";



function Contact() {
  return (
    <div>
      <Navbar />
      <div class="hero-contact">
        <h1>Have questions or <br></br> need support?</h1>
    </div>

      <div class="container-contact">
        <form>
            <p>Name</p>
            <input type="text" placeholder="Enter your name" required />
            <p>E-mail</p>
            <input type="email" placeholder="Enter your e-mail" required />
            <p>Message</p>
            <textarea placeholder="Your message" required></textarea>
            <div class="btn-main-contact"><Link to="/thankpage"><button class="btn-contact">Contact Us</button></Link></div>
        </form>
      </div>
   

    <Footer />

    </div>
  );
}

export default Contact;
