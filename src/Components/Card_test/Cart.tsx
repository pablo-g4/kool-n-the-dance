import React from 'react';
import './Cart.css'
import fleche from "../../images/Galerie/Fleche.png"

const Cart = () => {
  return ( 
  <div className="cardCours">
          <p className="titreCours">Zumba</p>
          <div className="imgCours "></div><div className="flip-card">
    <div className="flip-card-front">
      <p>
        Programme d'entraînement physique complet, alliant tous les
        éléments de la remise en forme : cardio et préparation musculaire,
        équilibre et flexibilité. Les chorégraphies s'inspirent
        principalement des danses latines mais aussi de styles variés
        comme la danse orientale, disco, hip hop...
      </p>
    </div>
    <div className="flip-card-back">
      
    </div>
    <button onClick={flipCard}>Cliquez ici</button>
  </div><div>
      <img className="flecheRe" src={fleche} alt="fleche" />
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
      };
    };
  };
};


export default Cart

