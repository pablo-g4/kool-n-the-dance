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
                <div className="titlecours">
                <h1><b>Cours</b></h1>
                </div>
                <div className="grow">
                  {
                    images.map((image,index) => (
                      <CardCours key={index} imgSrc={image.imgSrc} description={image.description}/>
                    ))
                  }
                  {/* <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transform: isHovering ? 'translate(-70px, 0px)' : 'none',}}>
                    <img src={image} className="card-img-top" />
                  </div>
                  <div className="textdanses" style={{transform: isHovering ? 'translate(-70px, 0px)' : 'none',}}>
                    <p>Danses</p>
                  </div>
                  <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transform: isHovering ? 'translate(-10px, 0px)' : 'none',}}>
                    <img src={image} className="card-img-top" /> 
                  </div>
                  <div className="textfitness" style={{transform: isHovering ? 'translate(-10px, 0px)' : 'none',}}>
                    <p>Fitness</p>
                  </div>
                  <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{transform: isHovering ? 'translate(60px, 0px)' : 'none',}}>
                    <img src={image} className="card-img-top" />
                  </div>
                  <div className="textforfait" style={{transform: isHovering ? 'translate(60px, 0px)' : 'none',}}>
                    <p>Forfait</p>
                  </div> */}
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
