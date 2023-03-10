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
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName='CardContainer' >
        <div>
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
              <div className="mt-4 row justify-content-end">
                <img className="flecheRe" src={fleche} alt="fleche" onClick={handleClick} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
        <div>
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
              <div className="mt-4 row justify-content-end">
                <img className="flecheRe" src={fleche} alt="fleche" onClick={handleClick} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>


    </>
  );
}
ReactCardFlip.defaultProps = {
  cardStyles: {
    back: {},
    front: {},
  },
  cardZIndex: 'auto',
  containerStyle: {},
  flipDirection: 'horizontal',
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false,
};

export default CardFlip;
