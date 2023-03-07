import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import img from "./test.png"
import './styleActivite.css';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';



// Import Swiper styles
import 'swiper/css';

const slides = [
  <SwiperSlide key={1}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={2}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={3}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={3}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={3}><img src={img}/></SwiperSlide>,
];

const Carrousel = () => {
      const [showText, setShowText] = useState(false);

      const handleMouseOver = () => {
        setShowText(true);
      };

      const handleMouseOut = () => {
        setShowText(false);
      };
      const swiperOptions = {
        loop:true,
        navigation:true,
      }

      SwiperCore.use([Navigation]);
      return (
       /* <div>
        style={{marginBottom: "50px"}}
        </div> */
            <Swiper {...swiperOptions} 

                className='swiper-container'
                loop ={true}
                slidesPerView={3}
                style={{width: "1350px", height: "400px", backgroundColor: "#FFFFFF",marginTop: "30px"}}
                spaceBetween={-500}
                centeredSlides={true}                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                  {slides}
              </Swiper>
              
      )
    }
  export default Carrousel