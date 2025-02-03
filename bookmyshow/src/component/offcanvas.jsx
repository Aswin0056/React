import React, { useState } from 'react';
import "../styles/offcanvas.css"; // Add styles for the off-canvas bar

function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="open-btn" onClick={toggleOffCanvas}>
        &#9776; 
      </button>

      <div className={`offcanvas ${isOpen ? 'show' : ''}`}>
        <button className="close-btn" onClick={toggleOffCanvas}>
          &times; 
        </button>
        <div className="offcanvas-content">
          <a href="/">Home</a>
          <a href="/">Movies</a>
          <a href="/">Events</a>
          <a href="/">Sports</a>
          <a href="/">Plays</a>
          <a href="/">Activities</a>
        </div>
      </div>

      {isOpen && <div className="backdrop" onClick={toggleOffCanvas}></div>}
    </>
  );
}

export default OffCanvas;
