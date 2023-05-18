import React, { Component, useState } from "react";
import "./HeaderCours.css"
import FitnessImage from '../../Assets/Images/Cours/Fitness.jpeg'
import ForfaitImage from '../../Assets/Images/Cours/Forfaits.jpeg'
import Danse from "../../Assets/Images/Cours/Danses.jpg"
import vaguerose from "./VagueRose.png"
import CardCours from "./CardCours"

export const HeaderCours = () => {
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    { imgSrc: Danse, title: 'Danses' },
    { imgSrc: FitnessImage, title: 'Fitness' },
    { imgSrc: ForfaitImage, title: 'Forfait' },
  ]
  const handleMouseEnter = (e: any) => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <header>
        <div className="conteneur">
          <div className="text-center titlecours">
            <h1>Cours</h1>
          </div>
          <div className="grow">
            {
              images.map((image, index) => (
                <CardCours key={index} imgSrc={image.imgSrc} title={image.title} />
              ))
            }
          </div>
        </div>
        <div className="divvague">
          <img className="vague" src={vaguerose} />
        </div>
      </header>
    </>
  );
}

