import React, { useEffect } from "react";
import fleche from "../../images/Galerie/Fleche.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./cardHomeCours.css"
const CardCours = ({  titre = "", text = "", src = "../../images/Galerie/DAN_0809inv@2x.png" }) => {
  useEffect(() => {
    document.getElementById('fitness')!.style.backgroundImage = "url('"+{src}+"')";
  })

  return (
    <div>
      <div >
        <div className="cardCours">
          <p className="titreCours">{titre}</p>
          <div className="imgCours " id="imgCours">
            <p>
              {text}
            </p>
          </div>
          {/* <img className="flecheRe" src={fleche} alt="fleche" /> */}
        </div>
      </div>
    </div>
  );
};

export default CardCours;