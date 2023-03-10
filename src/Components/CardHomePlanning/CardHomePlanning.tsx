import React, { Component } from "react";

import imgtest from "../../images/Galerie/DAN_0568inv.png";
import "./CardHomeP.css";

const CardHomePlanning = ({ horaire = "", titre = "", text = "" }) => {
  return (
    <div className="bg-blanc m-4 row justify-content-center spacingCard">
      <p className="horaire-planning col-12 mt-3">{horaire}</p>
      <div className="image-taille ">
        <img className="img-fluid" src={imgtest}></img>
      </div>
      <p className="sous-img col-12 mt-3">{titre}</p>
      <p className="sous-text">{text}</p>
    </div>
  );
};

export default CardHomePlanning;
