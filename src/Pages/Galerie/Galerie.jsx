import React from 'react'
import Image1 from '../../images/Galerie/DAN_0568inv.png'
import Image2 from '../../images/Galerie/DAN_0616inv-1.png'
import Image3 from '../../images/Galerie/DAN_0809inv.png'
import Image4 from '../../images/Galerie/DAN_1169inv.png'
import Image5 from '../../images/Galerie/DAN_1465inv.png'


const Galerie = () => {
  return (
    <div className='containe'>
        <div className='top'>
            <div className="titre">Galerie</div>
        </div>
        <div className='galerie'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={Image1} alt="premiere slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Image2} alt="deuxieme slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Image3} alt="troisieme slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Image4} alt="quatrieme slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Image5} alt="cinquieme slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Galerie
