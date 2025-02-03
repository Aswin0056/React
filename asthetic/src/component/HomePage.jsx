import React from "react";
import Navbar from "./NavBar"; 
import "../styles/homestyle.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Faq from "./faq";
import Product from "./product";

// import ImageSlider from "./slider";
// import App from "./Slider2";
// import Slider from "./ImageSlider2";



function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="head">
        <div>
        <div class="btn-home"><Link to="/product"><button class="cta-button"><a href="/product">More Products</a> | <p2>See more &#8594;</p2></button></Link></div>
        <div class="home2"><p>Your Next Adventure Starts With Us</p></div>
        <div><img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec6afe3cc26899cbbb3026_Button%20Arrow.svg" alt="arrow-button" style={{height:"10px" , width:"10px"}} /></div>
        </div>
         </section>

      <div className="banner">
      <div className="message">
          <span>DESIGNED FOR EVERYDAY ADVENTURES </span>
      </div>
    </div>
    <div class="new-p">
      <p>Explore our curated collection of high-quality products</p>
    </div>
    <div class="new-p2">
    <p>Whether you're looking for a stylish new bag, a captivating <mark>book</mark>, or a perfect mug for your morning brew, we've got you covered.</p>
    </div>


    <section class="features1">
  <div class="feature-cards1">
    <div class="card-1">
      <img
        class="img-card"
        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851d1aa09dfee6fd19e_Space%20Kit%20Images%2003-p-500.jpg"
        alt="Uniqe Img"
      />
    </div>
    
    <div class="card-2"><Link to="/product">
    <img
        class="img-card"
        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb85129b701ffed0ce721_Space%20Kit%20Images%2002-p-1080.jpg"
        alt="Uniqe Img"
      /></Link>
    </div>
    <div class="card-overlay"><Link style={{ textDecoration:"none", color:"inherit" }} to="/product">
    <p className="overlay-text1">LightWeight, durable, and perfect for<br></br> any journey with our premium kits</p>  </Link>
    </div>  
    <div class="card-overlay"><Link style={{ textDecoration:"none", color:"inherit" }} to="/product">
    <p className="overlay-text2">See Details  &#8594;</p></Link>
  </div>
  </div>
</section>

<section class="features1">
  <div class="feature-cards1">
    <div class="card-3"><Link to="/product">
      <img
        class="img-card"
        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851a463b40d98d4a7db_Space%20Kit%20Images%2004-p-1080.jpg"
        alt="Uniqe Img"
      /></Link>
      </div>
      <div class="card-overlay1"><Link style={{ textDecoration:"none", color:"inherit" }} to="/product">
        <p className="overlay-text3">Tools to stay organized<br></br>and on top of your goals<br></br>every day.</p></Link>
      </div>
      <div class="card-overlay1"><Link style={{ textDecoration:"none", color:"inherit" }} to="/product">
        <p className="overlay-text4">Plan Ahead  &#8594;</p></Link>
      </div>
  

    <div class="card-4">
    <img
        class="img-card"
        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851658dc7040c4b85f8_Space%20Kit%20Images%2005-p-500.jpg"
        alt="Uniqe Img"
      />
    </div>
    <div class="card-btn">
        <p className="overlay-btn"><Link to="/product"><button class="btn-over">LEARN MORE</button></Link></p>
      </div>
    </div>
</section>



<div class="scroll-container">
        <div class="image-section"></div>
        <div class="content-section">
          <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab90cf68b972fed9b17e_Space%20Kit%20Images%2001-p-800.jpg"  alt="img"/>
          <div className="all-text">
            <p className="text-1">IDEAL FOR QUIET EVENINGS</p>
            <h1 className="text-2">Mindful Living <br></br> in Every Page</h1>
            <p className="text-3">Whether you're looking to reflect on your past, gain clarity on <br></br> your goals, or simply find a few moments of calm in your busy <br></br> day, this beautifully designed guide will inspire and motivate.</p>
            <p className="text-4">Let Journey Within be the companion that helps you navigate <br></br> life's ups and downs with grace and mindfulness.</p>
          </div>
          <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab91bb196a91861b27de_Space%20Kit%20Images%2007.jpg" className="image-h2" alt="img"/>
          <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab90b7154857f336bf24_Space%20Kit%20Images%2009-p-500.jpg" className="image-h3"  alt="img"/>
          <div className="all-text">
            <p className="text-1">QUALITY, SIMPLICITY, AND COMFORT</p>
            <h1 className="text-2">Simplicity Meets<br></br> Sophistication</h1>
            <p className="text-3">Designed for those who appreciate the finer things in life, this <br></br> mug combines functionality with sleek, modern design. Its <br></br> smooth ceramic surface is easy to clean and resistant to <br></br> stains, while the comfortable handle ensures a perfect grip <br></br> every time.</p>
            <p className="text-4">Whether you're enjoying a quiet morning at home or a quick <br></br> break at the office, the Morning Brew Mug adds a touch of <br></br> sophistication to your daily routine.</p>
          </div>
          <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edab90c837bfdd2e6f4c36_Space%20Kit%20Images%2008.jpg" className="image-h2" alt="img"/>
        </div>
    </div>


<div className="bar-name-btn">
 <span  className="text-x1">x</span> 
  <span  className="bar-h2"> OUR PRODUCTS</span> 
  <div class="btn-main-nav-home"><Link to="/product"><button class="btn-nav-home">SHOP NOW</button></Link></div>
  <p className="bar-p">All collection</p>

  </div>

  {/* <Slider /> */}


<Product />


<Faq />


<Footer />

    </div>
  );
}

export default HomePage;
