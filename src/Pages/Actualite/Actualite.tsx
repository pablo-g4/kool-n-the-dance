import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import CardRight from '../../Components/CardRight/CardRight';
import { getAllNews } from '../../Controllers/news'
import { useCallback, useEffect } from 'react';
import AddOrEditNewsModal from '../../Components/News/AddOrEditNewsModal';
import { News } from '../../Models/News';

const Actualite = () => {

  const[allNews, setAllNews] = useState<News[]>([])



  const fetchData = useCallback(async () => {

        const news = await getAllNews()
        if(news.length){
          setAllNews(news)
        }

        console.log(news)
  }, [])

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div className='actualite-page'>
      <a className='titre-actualite text-center my-7'> Actualités </a>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
          {
            allNews.map((news)=> (
              <Card title={news.title} description={news.description}/>
            ))
          }
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