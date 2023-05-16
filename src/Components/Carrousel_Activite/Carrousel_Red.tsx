import React, { Component, useState } from 'react'
import img from "./test.png"
import './styleActivite.css'
import ReactDOM from 'react-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.min.css'
import logo from './Groupe 56.png'
import { Carousel } from '@mantine/carousel'
import CardHomeCours from "../../Components/cardHomeCours/cardHomeCours"
import { Forfait } from '../../Models/Forfait'
import _ from 'lodash'
import 'swiper/css'
import CarouselSlide from './CarrouselSlideForfait'
const isMobile = document.documentElement.clientWidth < 600;


const Carrousel_Yellow = ({ forfaits } : { forfaits?: Forfait[]}) => {

  SwiperCore.use([Navigation]);
  return (
    <>
      <div className='mainDiv pt-5'>
        <div className='title-div'>
          <img src={logo} className="img-div-logo" alt="Logo" />
          <div className='Carre_Red text-center'>
            <p className='mt-4'>Nos Forfaits</p>
          </div>
        </div>
      </div>
      <div className="col-12 h-100 background-red" id="danse">
        <div className="col-10 border-cours-red carousel-div-main col-lg-8 col-md-11 mx-auto h-100">
            <Carousel mx="auto" withIndicators height={380} className="carousel-home"  slideSize={isMobile ? "100%" : "33.333333%"}
              slideGap="md" loop
              align="start">
                {forfaits?.length &&
              _.map(forfaits, (cours, index) => (
                <CarouselSlide key={index} cours={cours} />
              ))}

            </Carousel>
        </div>
      </div>
    </>
  )
}
export default Carrousel_Yellow