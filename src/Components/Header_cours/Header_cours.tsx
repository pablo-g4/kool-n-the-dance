import React, { Component, useState } from "react";
import "./Header_cours.css";
import image from "./test.png";

const Header_cours = () => {
  const [isShown, setIsShown] = useState(false);

    return (
        <>
          <div className="groupe">
            <div className="card"
              onMouseEnter={() => console.log("test")}
            >
              <img src={image} className="card-img-top" alt="..." />
            </div>
            <div className="textdanses">
              <p>Danses</p>
            </div>
            <div className="card">
              <img src={image} className="card-img-top" /> 
            </div>
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
            </div>
          </div>
        </>
    );
  
}

export default Header_cours;
