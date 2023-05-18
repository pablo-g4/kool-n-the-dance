import React, { useState } from 'react'
import { Carousel } from "@mantine/carousel"
import _ from 'lodash'
import { Forfait } from '../../Models/Forfait';

export const CarouselSlideForfait = ({ forfait } : { forfait: Forfait }) => {

    const [hover, setHover] = useState(false)
  
    return (
      <Carousel.Slide>
        <div 
          className="cardCoursRed"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className="titreCours">{forfait.title}</p>
          <div 
            className="imgCours" 
            style={
              !hover
                ? {
                    backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.2), rgba(251, 54, 64, 1)),url(${forfait.imageUrl})`,backgroundSize:"cover"
                  }
                : {
                    backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.75), rgba(251, 54, 64, 1)),url(${forfait.imageUrl})`,backgroundSize:"cover"
                  }
            }
            id="imgCours"
          >
            <p>Description</p>
          </div>
        </div>
      </Carousel.Slide>
    );
  }
