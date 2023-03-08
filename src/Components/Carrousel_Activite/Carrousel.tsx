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
  <SwiperSlide key={3}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={5}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={4}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={2}><img src={img}/></SwiperSlide>,
  <SwiperSlide key={1}><img src={img}/></SwiperSlide>,
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
        spaceBetween:-400,
        slidesPerView:3,
      }
      

      SwiperCore.use([Navigation]);
      return (
       /* <div>
        style={{marginBottom: "50px"}}
        </div> */
            <Swiper {...swiperOptions}

                className='swiper-container'
               /* style={{width: "1350px", height: "700px", backgroundColor: "#FFFFFF",marginTop: "30px"}}*/
                /*spaceBetween={300}*/
                centeredSlides={true}                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
              {
                slides.map((Slide,index)=>(
                 <SwiperSlide key={index} virtualIndex={index}><img src={img}/></SwiperSlide>
                ))
              }
              </Swiper>
              
      )
    }
  export default Carrousel