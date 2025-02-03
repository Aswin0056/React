import "../styles/footer.css"



function Footer(){
    return(
        <div>
            <div class="footer-container">
      {/* <!-- Left Side Footer Sections --> */}
      <div class="footer-section">
        <h4>ABOUT</h4>
        <ul>
          <li><a href="/">About Flipkart</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Flipkart Stories</a></li>
          <li><a href="/">Press</a></li>
          <li><a href="/">Flipkart Wholesale</a></li>
        </ul>
      </div>
  
      <div class="footer-section">
        <h4>HELP</h4>
        <ul>
          <li><a href="/">Payments</a></li>
          <li><a href="/">Shipping</a></li>
          <li><a href="/">Cancellation & Returns</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>
      </div>
  
      <div class="footer-section">
        <h4>POLICY</h4>
        <ul>
          <li><a href="/">Return Policy</a></li>
          <li><a href="/">Terms Of Use</a></li>
          <li><a href="/">Security</a></li>
          <li><a href="/">Privacy</a></li>
        </ul>
      </div>
  
      <div class="footer-section">
        <h4>SOCIAL</h4>
        <ul >
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Twitter</a></li>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">YouTube</a></li>
        </ul>
      </div>
  
      {/* <!-- Right Side Footer Sections --> */}
      <div class="footer-section">
        <h4>EXTRAS</h4>
        <ul>
          <li><a href="/">Coupons</a></li>
          <li><a href="/">Gift Cards</a></li>
          <li><a href="/">Sitemap</a></li>
        </ul>
      </div>
  
    </div>
  
    {/* <!-- Footer Bottom Section --> */}
    <div class="footer-bottom">
      <p>&copy; 2024 Created By <strong>Aswin</strong></p>
    </div>
        </div>
    );
}

export default Footer;