import React, { useState } from "react";
import "../styles/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <button className="nav-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-content">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="slider-image"
        />
      </div>
      <button className="nav-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
