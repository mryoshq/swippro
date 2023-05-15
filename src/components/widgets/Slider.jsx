import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


function Slider({ images }) {
  return (
    <Swiper
      loop={true}
      initialSlide={1}
      slidesPerView={"3"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img 
            src={image.src} 
            alt={image.alt} 
            className="carousel-image"
            width="631"
            height="658"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
