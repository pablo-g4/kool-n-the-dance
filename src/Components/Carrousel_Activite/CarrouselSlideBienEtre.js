import React, { useState } from 'react';
import { Carousel } from "@mantine/carousel";

function CarouselSlide({ cours }) {
    const [hover, setHover] = useState(false);
  
    return (
      <Carousel.Slide>
        <div 
          className="cardCoursYellow"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className="titreCours">{cours.title}</p>
          <div 
            className="imgCours" 
            style={
              !hover
                ? {
                    backgroundImage: `linear-gradient(to bottom, rgba(247, 184, 1, 1), rgba(247, 184, 1, 0.2), rgba(247, 184, 1, 1)),url(${cours.imageUrl})`, backgroundSize:"cover"
                  }
                : {
                    backgroundImage: `linear-gradient(to bottom, rgba(247, 184, 1, 1), rgba(247, 184, 1, 0.75), rgba(247, 184, 1, 1)),url(${cours.imageUrl})`, backgroundSize:"cover"
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