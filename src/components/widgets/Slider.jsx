import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hero from '~/assets/images/hero2.svg';

// Import Swiper styles
import "swiper/css";


function Slider({ images }) {
  return (
    <Swiper
      loop={true}
      initialSlide={1}
      slidesPerView={1} // Default to one slide per view
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: false,
      }}
      modules={[]}
      className="mySwiper"
      
      breakpoints={{
        // when window width is >= 767px
        425: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img 
            src={image.src} 
            alt={image.alt} 
            className="swiper-slide"
            width="631"
            height="658"
            
           
          />
        </SwiperSlide>
      ))}
     
    </Swiper>
  );
}

export default Slider;
