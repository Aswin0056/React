import React from "react";
import Navbar from "./NavBar";
import Faq from "./faq";
import Footer from "./footer";
import Product from "./product";
import "../styles/propagsty.css";



function ProductPage(){
    return(
        <div>
            <Navbar />
            <div className="banner">
      <div className="message-container">
        <p class="message">YOUR GATEWAY TO THE STARS</p> 
        
      </div>
    </div>
    <div class="para0">
      <p>Explore the space kits designed<br></br>to inspire curiosity and wonder</p>
    </div>



            <Product />
            <Faq />
            <Footer />
      
        </div>
    );
}

export default ProductPage;