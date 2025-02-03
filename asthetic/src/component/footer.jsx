import React from "react";
import "../styles/footerstyle.css";
import Logo from "../images/logo.png"

function Footer() {
    return (

<footer class="footer">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
  <div class="footer-container">
  
    <div class="footer-logo-section">
      <img
        src={Logo}
        alt="Asthetic Logo"
        class="footer-logo"
      />
     
    </div>
    </div>
    <div className="logo-name"><p>Asthetics</p></div>

  
    <div class="footer-links">
      <div class="footer-column">
        <h4 class="footer-heading">Explore</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/product">Products</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4 class="footer-heading">Support</h4>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
        <div class="footer-column">
        <h4 class="footer-heading">Others</h4>
        <ul>
          <li><a href="#faq">Style Guide</a></li>
          <li><a href="#shipping">Changelog</a></li>
        </ul>
        </div>
        <div class="footer-column">
        <h4 class="footer-heading">Utility</h4>
        <ul>
          <li><a href="#faq">Instruction</a></li>
          <li><a href="#shipping">License</a></li>
        </ul>
      </div>
    </div>

  
    <div class="footer-social">
      <div class="social-icons">
        <p href="https://twitter.com" class="fab fa-twitter"></p>
        <p href="https://facebook.com" class="fab fa-facebook-f"></p>
        <p href="https://instagram.com"class="fab fa-instagram"></p>
        <p href="https://github.com"class="fab fa-github"></p>
      </div>
    </div>
  
  <div class="footer-bottom">
    <p>&copy; 2024 Created By Aswin.</p>
  </div>
 
</footer>
    );

}
export default Footer;
