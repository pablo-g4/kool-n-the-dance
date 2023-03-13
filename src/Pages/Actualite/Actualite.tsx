import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import CardRight from '../../Components/CardRight/CardRight';
import { getAllNews } from '../../Controllers/news'
import { useCallback, useEffect } from 'react';
import AddOrEditNewsModal from '../../Components/News/AddOrEditNewsModal';
import { News } from '../../Models/News';
import {  Group, Button } from '@mantine/core';
import DeleteConfirmationModal from '../../Components/Global/DeleteConfirmationModal';
import { deleteNews } from '../../Controllers/news';

const Actualite = () => {

  const [allNews, setAllNews] = useState<News[]>([])
  const [currentNews, setCurrentNews] = useState<News | undefined>(undefined)
  const [isAddOrEditModalOpen, setIsAddOrEditModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);

  const fetchData = useCallback(async () => {
    const news = await getAllNews()
    if(news.length){
      setAllNews(news)
    }
  }, [])

  const closeAddOrEditModal = () => {
    setIsAddOrEditModalOpen(false)
    setCurrentNews(undefined)
  }

  const closeDeleteConfirmationModal = () => {
    setIsDeleteConfirmationModalOpen(false)
  }

  const openDeleteConfirmationModal = () => {
    setIsDeleteConfirmationModalOpen(true)
  }

  const deleteCurrentNews = () => {
    setAllNews((oldNewsState) => oldNewsState.filter(newsItem => newsItem.id !== currentNews?.id ))
    setCurrentNews(undefined)
    closeDeleteConfirmationModal()
  }

  useEffect(() => {
    fetchData()
    // console.log('i fire once....');
    
  }, []);

  return (
    <div className='actualite-page'>
      <a className='titre-actualite text-center my-7'> Actualités </a>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
          {
            allNews.map((news, index) => <Card news={news} setCurrentNews={setCurrentNews} setIsOpen={setIsAddOrEditModalOpen} displayDeleteConfirmationModal={openDeleteConfirmationModal} key={index} />)
          }
        </div>
        <div className='col-5 d-none d-md-block'>
          <CardRight />
        </div>
      </div>
      <Group position="center">
        <Button onClick={() => setIsAddOrEditModalOpen(true)}>Ajouter actualité</Button>
      </Group>
      {
        isAddOrEditModalOpen &&
        <AddOrEditNewsModal currentNews={currentNews} setAllNews={setAllNews} isOpen={isAddOrEditModalOpen} setIsOpen={closeAddOrEditModal} />
      }
      {
        isDeleteConfirmationModalOpen && 
        <DeleteConfirmationModal isOpen={isDeleteConfirmationModalOpen} closeModal={closeDeleteConfirmationModal} deleteCurrentNews={deleteCurrentNews} />
      }
    </div>
  )
}

export default Actualite