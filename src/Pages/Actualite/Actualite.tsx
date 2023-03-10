import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import CardRight from '../../Components/CardRight/CardRight';
import { getAllNews } from '../../Controllers/news'
import { useCallback, useEffect } from 'react';
import AddOrEditNewsModal from '../../Components/News/AddOrEditNewsModal';
import { News } from '../../Models/News';
import {  Group, Button } from '@mantine/core';

const Actualite = () => {

  const[allNews, setAllNews] = useState<News[]>([])
  const[currentNews, setCurrentNews] = useState<News>()
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrentNews = (currentNews:News) => {
    setCurrentNews(currentNews);
  }

  const fetchData = useCallback(async () => {
    const news = await getAllNews()
    if(news.length){
      setAllNews(news)
    }
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
            allNews.map((news, index) => (
              <Card news={news} setCurrentNews={setCurrentNews} key={index} />
            ))
          }
        </div>
        <div className='col-5 d-none d-md-block'>
          <CardRight/>
        </div>
      </div>
        <Group position="center">
          <Button onClick={() => setIsOpen(true)}>Ajouter actualité</Button>
         </Group>
      {isOpen &&
        <AddOrEditNewsModal currentNews={currentNews} setAllNews={setAllNews} isOpen={isOpen} setIsOpen={setIsOpen} />
      }
    </div>
  )
}

export default Actualite