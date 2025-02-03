import React from "react";
import "../styles/faqstyles.css";





function Faq(){
    
    return(
        <div>
<section class="faq-section">
  <h2 class="faq-heading">Frequently Asked <br></br>Questions</h2>
  <div class="faq-container">
  
    <div class="faq-item">
      <input type="checkbox" id="faq1" class="faq-checkbox" />
      <label for="faq1" class="faq-question">
        What's the quality of your products?
        <span class="faq-icon">+</span>
      </label>
      <div class="faq-answer">
        <p>We prioritize quality in every item we sell. Our products are designed to be durable, functional, and stylish.</p>
      </div>
    </div>

  
    <div class="faq-item">
      <input type="checkbox" id="faq2" class="faq-checkbox" />
      <label for="faq2" class="faq-question">
        Do you offer returns?
        <span class="faq-icon">+</span>
      </label>
      <div class="faq-answer">
        <p>Yes! If you're not 100% satisfied with your purchase. we offer a 30-day return policy on all products.</p>
      </div>
    </div>


    <div class="faq-item">
      <input type="checkbox" id="faq3" class="faq-checkbox" />
      <label for="faq3" class="faq-question">
        Do you ship internationally?
        <span class="faq-icon">+</span>
      </label>
      <div class="faq-answer">
        <p>Absolutely. We offer worldwide shipping, so you can enjoy our products no matter where you are.</p>
      </div>
    </div>



    <div class="faq-item">
      <input type="checkbox" id="faq4" class="faq-checkbox" />
      <label for="faq4" class="faq-question">
        How long will my order take to arrive?
        <span class="faq-icon">+</span>
      </label>
      <div class="faq-answer">
        <p>Shipping times vary by location. but we aim to deliver within 5-10 business days for most orders.</p>
      </div>
    </div>


    <div class="faq-item">
      <input type="checkbox" id="faq5" class="faq-checkbox" />
      <label for="faq5" class="faq-question">
        Are your products environmentally friendly?
        <span class="faq-icon">+</span>
      </label>
      <div class="faq-answer">
        <p>We are committed to sustainability and use eco-friendly materials whenever possible in the production and packaging of our products.</p>
      </div>
    </div>
  </div>
</section>
</div>
);
}

export default Faq;