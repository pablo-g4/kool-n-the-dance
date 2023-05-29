import React, { useState, useEffect } from "react";
import "./cardHomeCours.css"
import '../../Assets/Images/Cours/Fitness.jpeg'
import { Carousel } from "@mantine/carousel"
import _ from "lodash"
const CardCours = ({ cours }: { cours: any }) => {
  const [hover, setHover] = useState(false)
  return (
    <Carousel.Slide >

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="cardCoursRed"
        style={
          !hover
            ? {
              backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.2), rgba(251, 54, 64, 1)),url(${cours.imageFile.fileUrl})`, backgroundSize: "cover"
            }
            : {
              backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.75), rgba(251, 54, 64, 1)),url(${cours.imageFile.fileUrl})`, backgroundSize: "cover"
            }
        }

      >
        <p className="titreCours text-white">{cours.title}</p>
        {
          hover?
          <p className="text-white d-flex flex-column text-center justify-content-center">
          { cours.associatedCourses && _.map(cours.associatedCourses, (cours, coursesIndex) => (<span key={coursesIndex}>{cours.title}</span>) )}
          </p>
          :
          null
        }
      </div>
    </Carousel.Slide>

  );
};

export default CardCours;