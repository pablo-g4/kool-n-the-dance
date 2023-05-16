import React, { useState } from 'react';
import { Carousel } from "@mantine/carousel";

function CarouselSlide({ cours }) {
    const [hover, setHover] = useState(false);
  
    return (
      <Carousel.Slide>
        <div 
          className="cardCours2"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className="titreCours">{cours.title}</p>
          <div 
            className="imgCours" 
            style={
              !hover
                ? {
                    backgroundImage: `linear-gradient(to bottom, rgba(100, 74, 130, 1), rgba(100, 74, 130, 0.2), rgba(100, 74, 130, 1)),url(${cours.imageUrl})`, backgroundSize:"cover"
                  }
                : {
                    backgroundImage: `linear-gradient(to bottom, rgba(100, 74, 130, 1), rgba(100, 74, 130,  0.75), rgba(100, 74, 130, 1)),url(${cours.imageUrl})`, backgroundSize:"cover"
                  }
            }
            id="imgCours"
          >
            <p>{cours.description}</p>
          </div>
        </div>
      </Carousel.Slide>
    );
  }

  export default CarouselSlide