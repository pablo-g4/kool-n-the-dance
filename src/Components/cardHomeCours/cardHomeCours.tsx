import React, { useState, useEffect } from "react";
import "./cardHomeCours.css"
import '../../Assets/Images/Cours/Fitness.jpeg'
import { Carousel } from "@mantine/carousel";
const CardCours = ({ cours }: { cours: any }) => {
  const [hover, setHover] = useState(false);
  console.log(cours)
  return (
    <Carousel.Slide >

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="cardCoursRed"
        style={
          !hover
            ? {
              backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.2), rgba(251, 54, 64, 1)),url(${cours.imageUrl})`, backgroundSize: "cover"
            }
            : {
              backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.75), rgba(251, 54, 64, 1)),url(${cours.imageUrl})`, backgroundSize: "cover"
            }
        }

      >
        <p className="titreCours">{cours.title}</p>
        {
          hover?
          <p className="imgCours2" >{cours.description}</p>
          :
          null
        }
      </div>
    </Carousel.Slide>

  );
};

export default CardCours;