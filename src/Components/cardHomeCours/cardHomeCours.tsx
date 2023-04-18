import React from "react";
import fleche from "../../images/Galerie/Fleche.png"
import "./cardHomeCours.css"
const CardCours = ({show}: {
  show?: boolean
}) => {
  return (
    <div>
      <div >
        <div className="cardCours">
          <p className="titreCours">Zumba</p>
          <div className="imgCours ">
            <p>
              Programme d'entraînement physique complet, alliant tous les
              éléments de la remise en forme : cardio et préparation musculaire,
              équilibre et flexibilité. Les chorégraphies s'inspirent
              principalement des danses latines mais aussi de styles variés
              comme la danse orientale, disco, hip hop...
            </p>
          </div>
          {/* <img className="flecheRe" src={fleche} alt="fleche" /> */}
        </div>
      </div>
    </div>
  );
};

export default CardCours;