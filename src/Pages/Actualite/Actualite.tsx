import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import CardRight from '../../Components/CardRight/CardRight';
import { getAllNews } from '../../Controllers/news'
import { useCallback, useEffect } from 'react';
import AddOrEditNewsModal from '../../Components/News/AddOrEditNewsModal';

const Actualite = () => {

  const allNews = async () => {
    const news = await getAllNews()
  }


  const fetchData = useCallback(async () => {
    await allNews()
  }, [])

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div className='actualite-page'>
      <a className='titre-actualite text-center my-7'> Actualités </a>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
          <Card />
        </div>
        <div className='col-5 d-none d-md-block'>
          <CardRight/>
        </div>
      </div>
      <AddOrEditNewsModal/>
    </div>
  )
}

export default Actualite