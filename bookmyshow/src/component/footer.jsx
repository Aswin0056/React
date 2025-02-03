import "../styles/footer.css"
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Column 1 */}
          <div className="footer-column">
            <h5>Explore</h5>
            <ul>
              <li><a href="/">Movies</a></li>
              <li><a href="/">Plays</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Sports</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="footer-column">
            <h5>Support</h5>
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="footer-column">
            <h5>Connect</h5>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">LinkedIn</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="footer-column">
            <h5>Download App</h5>
            <div className="app-links">
              <a href="/"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /></a>
              <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="footer-divider"><img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="footer-logo" /></div>
        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2025 BookMyShow. Created by Aswin.</p>
          <div className="footer-links">
            <a href="/">Terms of Use</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
