import React from "react";
import Navbar from "./NavBar";
import Footer from "./footer";
import "../styles/thank.css";




function Thank(){
    return(
        <div>
            <Navbar />
            <h1 className="thank-1">Have questions or <br></br> need support?</h1>
            <h1 className="thank-2">Thank you! Your submission has been received!</h1> 
            <Footer />
        </div>
    )
}

export default Thank;