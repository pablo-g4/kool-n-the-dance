import React, { useState } from 'react';
import { Carousel } from "@mantine/carousel";

function CarouselSlideForfait({ cours }) {
    const [hover, setHover] = useState(false);
  
    return (
      <Carousel.Slide>
        <div 
          className="cardCoursRed"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className="titreCours">{cours.title}</p>
          <div 
            className="imgCours" 
            style={
              !hover
                ? {
                    backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.2), rgba(251, 54, 64, 1)),url(${cours.imageUrl})`,backgroundSize:"cover"
                  }
                : {
                    backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.75), rgba(251, 54, 64, 1)),url(${cours.imageUrl})`,backgroundSize:"cover"
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

  export default CarouselSlideForfait