import React from 'react'
import './Gestionactualite.css'
import Image5 from '../../images/Galerie/DAN_1465inv.png'
import Card from '../../Components/Card/Card'



function Gestionactualite() {
  return (
    <div className='actualite-page'>
      <a className='titre-actualite text-center my-7'> Actualités </a>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
            <Card title="gestion actualite" 
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio repellendus voluptatibus, architecto vel ea qu
              ibusdam iusto at aspernatur necessitatibus! Debitis quibusdam quo cumque id commodi. Obcaecati fuga iste quisquam voluptatum!"/>
        </div>
        <div className='col-5 d-none d-md-block'>
        </div>
      </div>
    </div>
  )
}

export default Gestionactualite