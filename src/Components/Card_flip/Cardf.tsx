import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import imgbg from "../../images/Galerie/DAN_0809inv.png"
import fleche from "../../images/Galerie/Fleche.png"
import './Cardf.css'
function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  function handleButtonClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        
          <div className="cardCours">
          <p className="titreCours">Zumba</p>
          <div className="imgCours">
          <p>
              Programme d'entraînement physique complet, alliant tous les
              éléments de la remise en forme : cardio et préparation musculaire,
              équilibre et flexibilité. Les chorégraphies s'inspirent
              principalement des danses latines mais aussi de styles variés
              comme la danse orientale, disco, hip hop...
            </p>
            </div>
           
            </div>
        
        <div >
          <img src={imgbg} alt="Back of Card" />
        </div>
        
      </ReactCardFlip>
      <img className="flecheRe" src={fleche} alt="fleche" onClick={handleClick}  style={{cursor: 'pointer'}}/>
     
    </>
  );
}

export default CardFlip;
