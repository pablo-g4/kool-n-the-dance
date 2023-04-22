import React, { useEffect } from "react";
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
        </div>
      </div>
    </div>
  );
};

export default CardCours;