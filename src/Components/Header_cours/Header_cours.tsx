import React, { Component, useState } from "react";
import "./Header_cours.css";
import image from "./test.png";

const Header_cours = () => {
const [isShown, setIsShown] = useState(false);
const [isHovering, setIsHovering] = useState(false);
const handleMouseEnter = () => {setIsHovering(true);};
const handleMouseLeave = () => {setIsHovering(false);};



  

    return (
        <>
          <div className="groupe">
            <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transform: isHovering ? 'translate(50px, 0px)' : 'none',}}>
              <img src={image} className="card-img-top" alt="..." />
            </div>
            <div className="textdanses" style={{transform: isHovering ? 'translate(50px, 0px)' : 'none',}}>
              <p>Danses</p>
            </div>
            <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transform: isHovering ? 'translate(50px, 0px)' : 'none',}}>
              <img src={image} className="card-img-top" /> 
            </div>
            <div className="card">
              <img src={image} className="card-img-top" alt="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{transform: isHovering ? 'translate(50px, 50px)' : 'none',}}/>
            </div>
          </div>
        </>
    );
  
}

export default Header_cours;
