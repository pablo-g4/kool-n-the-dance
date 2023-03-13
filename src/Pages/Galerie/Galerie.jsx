import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { Carousel } from '@mantine/carousel';
import carousel1  from '../../Assets/Images/carousel/carousel1.png';
import carousel2  from '../../Assets/Images/carousel/carousel2.png';
import carousel3 from '../../Assets/Images/carousel/carousel3.png';
import carousel4  from '../../Assets/Images/carousel/carousel4.png';
import carousel5  from '../../Assets/Images/carousel/carousel5.png';
import carousel6  from '../../Assets/Images/carousel/carousel6.png';


const Galerie = () => {
  return (
    <div className='body'>
      <div className="titre">Galerie</div>
        <div>
          <Carousel orientation="vertical" height={200} withIndicators maw={320} mx="auto">
            <Carousel.Slide>
              <img src={carousel1}></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel2}></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel3}></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel4}></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel5}></img>
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={carousel6}></img>
            </Carousel.Slide>
          </Carousel>
        </div>
     </div>    
  )
}

export default Galerie
