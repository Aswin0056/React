import React from "react";
import "../styles/viewpro.css"
import Navbar from "./NavBar";
import Footer from "./footer";
import Faq from "./faq";



function ViewProduct(){
    return(
        <div>
            <Navbar />
        <main1> 
            <section class="product">
                <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb302e/66edac916430596b601f9fc1_Space%20Kit%20Images%2010.jpg" alt="Explorer Bag" class="product-image"/> 
                <div class="product-details"> 
                    <h1>Explorer Bag</h1>
                     <p>The perfect companion for all your adventures.</p> 
                     <span class="price">$49.99</span> 
                     <button class="buy-now">Buy Now</button>
                 </div>
            </section> 
        </main1>
        <Faq />
        <Footer />
        </div>
           
    );
}

export default ViewProduct;