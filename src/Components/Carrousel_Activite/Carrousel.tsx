import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import img from "./test.png"
import './styleActivite.css';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';


// Import Swiper styles
import 'swiper/css';

const slides = [
  <SwiperSlide key={1}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={2}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={3}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={4}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={5}><img src={img}/></SwiperSlide>,
];

const Carrousel = () => {
      const [showText, setShowText] = useState(false);

      const handleMouseOver = () => {
        setShowText(true);
      };

      const handleMouseOut = () => {
        setShowText(false);
      };

      SwiperCore.use([Navigation]);
      return (
        
        <div className="carousel-container Car">
            <Swiper navigation={true}></Swiper>
            <Swiper centeredSlides={true}
                
                slidesPerView={3}
                spaceBetween={-720}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                  {slides}
            
              </Swiper>
              
            </div>
      )
    }
  export default Carrousel