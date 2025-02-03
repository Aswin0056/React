import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../styles/imageslider.css";


const images = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1733911700713_edwebgeneralsales.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1733829732281_webshowcase1240x300.jpg",
];

class ImageSlider extends Component {
  render() {
    return (
      <div className="sliderimg" style={{ width: "90%", margin: "auto" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
     
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                className="imgsli"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default ImageSlider;
