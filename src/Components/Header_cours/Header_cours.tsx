import React, { Component, useState } from "react";
import "./Header_cours.css";
import image from "./test.png";
import vaguerose from "./VagueRose.png";
import CardCours from "./CardCours";

const Header_cours = () => {
const [isHovering, setIsHovering] = useState(false);


const images = [
  { imgSrc : image, description: 'Danses', className: ''},
  { imgSrc : image, description: 'Fitness'},
  { imgSrc : image, description: 'Forfait'},
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
                <h1><b>Cours</b></h1>
                </div>
                <div className="grow">
                  {
                    images.map((image,index) => (
                      <CardCours key={index} imgSrc={image.imgSrc} description={image.description}/>
                    ))
                  }
                </div>
              </div>
              <div className="divvague">
                  <img  className = "vague" src={vaguerose} />
              </div>
            </header>
          </>
    );
  
}

export default Header_cours;
