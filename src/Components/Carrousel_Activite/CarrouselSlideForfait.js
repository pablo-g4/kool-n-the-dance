import React, { useState } from 'react';
import { Carousel } from "@mantine/carousel";
import _ from 'lodash';

function CarouselSlideForfait({ forfaitVM }) {
    const [hover, setHover] = useState(false);
  
    return (
      <Carousel.Slide>
        <div 
          className="cardCoursRed"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className="titreCours text-white">{forfaitVM.title}</p>
          <div 
            className="imgCours" 
            style={
              !hover
                ? {
                    backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.2), rgba(251, 54, 64, 1)),url(${forfaitVM.imageFile.fileUrl})`,backgroundSize:"cover"
                  }
                : {
                    backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.75), rgba(251, 54, 64, 1)),url(${forfaitVM.imageFile.fileUrl})`,backgroundSize:"cover"
                  }
            }
            id="imgCours"
          >
            <p className="text-white d-flex flex-column text-center justify-content-center">
            { forfaitVM.associatedCourses && _.map(forfaitVM.associatedCourses, (cours, coursesIndex) => (<span key={coursesIndex}>{cours.title}</span>) )}
            </p>
          </div>
        </div>
      </Carousel.Slide>
    );
  }

  export default CarouselSlideForfait