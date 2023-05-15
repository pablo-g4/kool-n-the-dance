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
import { Carousel } from '@mantine/carousel';
import _ from 'lodash';
import 'swiper/css';
import { Cours } from '../../Models/Cours';

const isMobile = document.documentElement.clientWidth < 600;



const Carrousel_Yellow = ({ allCours } : { allCours?: Cours[]}) => {

  SwiperCore.use([Navigation]);
  return (
    <>
      <div className='mainDiv pt-5'>
        <div className='title-div'>
          <img src={logo} className="img-div-logo" alt="Logo" />
          <div className='Carre_Yellow text-center'>
            <p className='mt-4'>Fitness et Bien-Être</p>
          </div>
        </div>
      </div>
      <div className="col-12 h-100 background-yellow" id="danse">
        <div className="col-10 border-cours-yellow carousel-div-main col-lg-8 col-md-11 mx-auto h-100">
            <Carousel mx="auto" withIndicators height={380} className="carousel-home"  slideSize={isMobile ? "100%" : "33.333333%"}
              slideGap="md" loop
              align="start">
                {
                  allCours && (
                    _.map(allCours, (cours) => (
                      <Carousel.Slide>
                      <div className="cardCoursYellow">
                        <p className="titreCours">{cours.title}</p>
                        <div className="imgCours " id="imgCours">
                          <p>
                            {cours.description}
                          </p>
                        </div>
                      </div>
                    </Carousel.Slide>
                    ))
                  )
                }

            </Carousel>
        </div>
      </div>
    </>
  )
}
export default Carrousel_Yellow