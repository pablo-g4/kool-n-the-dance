import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import img from "./test.png";
import './styleActivite.css';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
import logo from './Groupe 59.png';




// Import Swiper styles
import 'swiper/css';

const slides = [
  <SwiperSlide key={3}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={5}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={4}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={2}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={1}><img src={img} /></SwiperSlide>,
];

const Carrousel_Yellow = () => {
  const [showText, setShowText] = useState(false);

  const handleMouseOver = () => {
    setShowText(true);
  };

  const handleMouseOut = () => {
    setShowText(false);
  };
  const swiperOptions = {
    loop: true,
    navigation: true,
    spaceBetween: -90,
    slidesPerView: 3,
    centeredSlides: true,
  }


  SwiperCore.use([Navigation]);
  return (
    
    <div className='mainDiv'>
      <div className='imgLogo_Yellow'>
        <img className='logo_carrousel_Yellow' src={logo} alt="Logo" />
      </div>
      <div className='Carre_Yellow'>
        {<p className='mt-4'>Fitness et Bien-Être</p>}
      </div>
      <div className='background_Yellow'>
        {/* <img id='img' src={"./background.png"}></img> */}
        <Swiper {...swiperOptions}
          className='swiper-container-Yellow'
          style={{
            width: "1350px",
            height: "500px",
            marginTop: "30px",
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            slides.map((Slide, index) => (
              <SwiperSlide key={index} virtualIndex={index}><img className="caroussel_image" src={img} /></SwiperSlide>
            ))
          }
        </Swiper>
    </div>
    </div>

  )
}
export default Carrousel_Yellow