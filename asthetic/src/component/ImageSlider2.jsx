import React from "react";
import ImageSlider from "./ImageSlider";

const Slider = () => {
  const images = [
    "https://via.placeholder.com/600x300?text=Slide+1",
    "https://via.placeholder.com/600x300?text=Slide+2",
    "https://via.placeholder.com/600x300?text=Slide+3",
  ];

  return (
    <div>
      <h1>React Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default Slider;
