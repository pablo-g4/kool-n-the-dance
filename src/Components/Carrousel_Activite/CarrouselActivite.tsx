import React, { useEffect, useState } from "react";
import "./styleActivite.css";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import logo from "./Groupe 46.png";
import { Carousel } from "@mantine/carousel";
import "swiper/css";
import { Cours } from "../../Models/Cours";
import _ from "lodash";
import CarouselSlide from "./CarrouselSlideDanses";
const isMobile = document.documentElement.clientWidth < 600;

export const CarrouselActivite = ({ allCours }: { allCours?: Cours[] }) => {


  SwiperCore.use([Navigation])
  
  return (
    <>
      <div className="mainDiv">
        <div className="title-div">
          <img src={logo} className="img-div-logo" alt="Logo" />
          <div className="Carre text-center">
            <p className="mt-4 mb-4">Danses</p>
          </div>
        </div>
      </div>
      <div className="col-12 h-100 background-purple" id="danse">
        <div className="col-10 border-cours carousel-div-main col-lg-8 col-md-11   mx-auto h-100">
          <Carousel
            mx="auto"
            withIndicators
            height={380}
            className="carousel-home"
            slideSize={isMobile ? "100%" : "33.333333%"}
            slideGap="md"
            loop
            align="start"
          >
            {allCours?.length &&
              _.map(allCours, (cours, index) => (
                <CarouselSlide key={index} cours={cours} />
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}