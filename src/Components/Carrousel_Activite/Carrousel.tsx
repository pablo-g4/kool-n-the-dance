import PropTypes from 'prop-types'
import React, { Component } from 'react'
import img from "./test.png"
import './styleActivite.css';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export class Carrousel extends Component {
    static propTypes = {} 
  
    render() {
      return (<>
                  <Swiper className='Carou'
                
                slidesPerView={3}
                //spaceBetween={50}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
              
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
              </Swiper>
              
            </>   
      )
    }
  }
//  ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));
  export default Carrousel