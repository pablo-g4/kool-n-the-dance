import React, { Component, useState } from "react";
import "./Header_cours.css";
import image from "./test.png";
import vaguerose from "./VagueRose.png";

const Header_cours = () => {
const [isHovering, setIsHovering] = useState(false);
const handleMouseEnter = () => {setIsHovering(true);};
const handleMouseLeave = () => {setIsHovering(false);};




  

    return (
        <>
            <header>

                <div className="titlecours">
                <h1><b>Cours</b></h1>
                </div>
                <div className="groupe">
                  <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transform: isHovering ? 'translate(-70px, 0px)' : 'none',}}>
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
                  </div>
                </div>
                <div>
                  <img  className = "vague" src={vaguerose} />
                </div>
            </header>
          </>
    );
  
}

export default Header_cours;
