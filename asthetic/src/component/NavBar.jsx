import "../styles/navstyle.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {

        setIsHidden(true);
      } else {
    
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
      <div className="navbar-logo">
        <img
          src="https://i.postimg.cc/DzLM9bgZ/Aswin-logo-small-removebg-preview.png"
          alt="Logo"
        />
        <p3>Asthetics</p3>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/product">Products</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <div className="btn-main-nav">
          <Link to="/contact">
            <button className="btn-nav">Contact Us</button>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;