import React, { useState } from 'react';
import { Carousel } from "@mantine/carousel";
import { Link } from 'react-router-dom';
function CarouselSlide({ cours }) {
  const [hover, setHover] = useState(false);

  return (
    <Carousel.Slide>
      <div
        className="cardCours2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="titreCours">{cours.title}</p>
        <div
          className="imgCours"
          style={
            !hover
              ? {
                backgroundImage: `linear-gradient(to bottom, rgba(100, 74, 130, 1), rgba(100, 74, 130, 0.2), rgba(100, 74, 130, 1)),url(${cours.imageUrl})`, backgroundSize: "cover"
              }
              : {
                backgroundImage: `linear-gradient(to bottom, rgba(100, 74, 130, 1), rgba(100, 74, 130,  0.75), rgba(100, 74, 130, 1)),url(${cours.imageUrl})`, backgroundSize: "cover"
              }
          }
          id="imgCours"
        >
          <p>{cours.description}</p>
          <p>Prix : {cours.price} €</p>
          <p>Lieu : {cours.place}</p>

          <div className='btn-inscriptiondiv'>
            <Link to="../files/formulaireinscription.pdf" target="_blank" download>
              <button className='btn-inscr'>S'inscrire</button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel.Slide>
  );
}

export default CarouselSlide