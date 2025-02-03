import React from "react";
import "../styles/productstyle.css";
import { Link } from "react-router-dom";



function Product(){
    return(
      

<div className="card-container-content">
      <div className="card-content">
        <div className="card1-content"><Link to="/viewproduct" >
        <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb302e/66edac916430596b601f9fc1_Space%20Kit%20Images%2010.jpg" alt="Product 1" className="card-image" /></Link>
        <h6 className="card-title">EXPLORER BAG</h6>
        <p className="card-price">₹2,198.75</p>
        <p className="card-description">WHITE/BLACK</p>
        </div>
      </div>
      <div className="card-content">
        <div className="card1-content"><Link to="/viewproduct" >
        <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb302e/66edac98906bb4dacbd44651_Space%20Kit%20Images%2011-p-500.jpg" alt="Product 2" className="card-image" /></Link>
        <h6 className="card-title">JOURNEY WITHIN BOOK</h6>
        <p className="card-price">₹1,014.81</p>
        <p className="card-description">WHITE/ORANGE</p>
        </div>
      </div>
      <div className="card-content">
        <div className="card1-content"><Link to="/viewproduct" >
        <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb302e/66edaca06430596b601fad11_Space%20Kit%20Images%2012-p-500.jpg" alt="Product 3" className="card-image" /></Link>
        <h6 className="card-title">MORNING BREW MUG</h6>
        <p className="card-price">₹20,706.16</p>
        <p className="card-description">WITHIN/ORANGE</p>
        </div>
        
      </div>
    </div>
    );
}

export default Product;