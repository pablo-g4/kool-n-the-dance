import React from "react";
import "./cardHomeCours.css"
import '../../Assets/Images/Cours/Fitness.jpeg'

const CardCours = ({  titre = "", text = "", src= '../../Assets/Images/courmacuck.jpg', type =  "danse" }) => {

  const getBackgroundColor = () => {
    let backgroundColor = ''
    console.log('type', type);
    
    switch(type) {
      case 'fitness':
        backgroundColor = '#f7b801'
        break;
      case 'cours':
        backgroundColor = '#644A82'
        break;
      case 'forfait':
        backgroundColor = '#fb3640'
        break;
    }
    return backgroundColor
  }

  // function changeBackground(e: any) {
  //   let backgroundImageUrl = "../../Assets/Images/Cours/Fitness.jpeg"
  //   if(src) backgroundImageUrl = "'"+ src +"'"
  //   const url = `url(${backgroundImageUrl})`    
  //   e.target.style.backgroundImage = `linear-gradient(to bottom, rgba(100, 74, 130, 1), rgba(100, 74, 130, 0.75), rgba(100, 74, 130, 1)),${url}`
  // }


  return (
    <div>
      <div >
        <div 
          style={{
            backgroundColor: getBackgroundColor()
          }}
          className="cardCours">
          <p className="titreCours">{titre}</p>
          <div className="imgCours" id="imgCours">
            <p style={{
              wordBreak: 'break-all'
            }}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCours;