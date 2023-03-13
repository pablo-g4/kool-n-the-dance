import React from "react";
import fleche from "../../images/Galerie/Fleche.png"
import './CardCours.css'
const CardCours = () => {
  return (
    
      <div className="flip-card">        
        <div className="cardCours">
         <div className="flip-card-front"> 
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
          </div>
          <div className="flip-card-back">
          <p>gifnsiogfngfiogfsngosfg</p>
    </div>
          
    <img className="flecheRe" src={fleche} alt="fleche" onClick={flipCard}  style={{cursor: 'pointer'}}/>
          </div>
        
        </div>
     
  );

  function flipCard() {
    const card = document.querySelector('.flip-card');
    if (card !== null) {
      if (card.classList.contains('flip-card-flipped')) {
        card.classList.remove('flip-card-flipped');
      } else {
        card.classList.add('flip-card-flipped');
      }
    }
  }
  
  
}
export default CardCours;
