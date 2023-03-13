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
import logo from './Groupe 46.png';




// Import Swiper styles
import 'swiper/css';

const slides = [
  <SwiperSlide key={3}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={5}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={4}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={2}><img src={img} /></SwiperSlide>,
  <SwiperSlide key={1}><img src={img} /></SwiperSlide>,
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
    loop: true,
    navigation: true,
    spaceBetween: -90,
    slidesPerView: 3,
    centeredSlides: true,
  }


  SwiperCore.use([Navigation]);
  return (
    <div className='mainDiv'>
      <div className='imgLogo'>
        <img className='logo_carrousel' src={logo} alt="Logo" />
      </div>
      <div className='Carre'>
        {<p className='mt-4'>Danses</p>}
      </div>
      <div className='background'>
        {/* <img id='img' src={"./background.png"}></img> */}
        <Swiper {...swiperOptions}
          className='swiper-container'
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
export default Carrousel