import React from 'react';
import "../styles/navbar.css";
import logo from "../images/logo.png";
import OffCanvas from './offcanvas';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />

      <div className="search-location">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search for Movies, Plays, Events, Sports, and Activities" 
        />
        <div className="location" onClick={() => navigate('/select-city')}>
      City &#9662;
    </div>
    </div>

      <div className="user-actions">
        <button  onClick={() => navigate('/')}>Sign in</button>
      </div>
      <div><OffCanvas /></div>
    </nav>
  );
}

export default NavBar;
