import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import CardRight from '../../Components/CardRight/CardRight';


const Actualite = () => {
  return (
    <div className='actualite-page'>
      <h1 className='text-center my-7'> Actualités </h1>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
          <Card />
        </div>
        <div className='col-5 d-none d-md-block'>
          <CardRight/>
        </div>
      </div>
    </div>
  )
}

export default Actualite