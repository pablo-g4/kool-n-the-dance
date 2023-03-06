import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import CardRight from '../../Components/CardRight/CardRight';


const Actualite = () => {
  return (
    <div>
      <h1 className='text-center my-7'> Actualités </h1>
      <div className='row'>
        <div className='col-7'>
          <Card />
        </div>
        <div className='col-5'>
          <CardRight/>
        </div>
      </div>
      
      
    </div>

  )
}

export default Actualite