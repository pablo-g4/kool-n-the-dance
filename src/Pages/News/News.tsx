import React, { useState } from 'react'
import Card from '../../Components/Card/Card';
import CardRight from '../../Components/CardRight/CardRight';
import { getAllNews } from '../../Controllers/news'
import { useCallback, useEffect } from 'react';
import AddOrEditNewsModal from '../../Components/News/AddOrEditNewsModal';
import { News } from '../../Models/News';
import {  Group, Button } from '@mantine/core';
import DeleteConfirmationModal from '../../Components/Global/DeleteConfirmationModal';
import { deleteNews } from '../../Controllers/news';

const NewsPage = () => {

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

  const deleteCurrentNews = async (idToDelete: string) => {
    setAllNews((oldNewsState) => oldNewsState.filter(newsItem => newsItem.id !== idToDelete ))
    await deleteNews(idToDelete)
    setCurrentNews(undefined)
    closeDeleteConfirmationModal()
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='actualite-page'>
      <a className='titre-actualite text-center my-7'> Actualités </a>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
          {
            allNews.map((news, index) => <Card news={news} setCurrentNews={setCurrentNews} key={index} />)
          }
        </div>
        <div className='col-5 d-none d-md-block'>
          <CardRight />
        </div>
      </div>
    </div>
  )
}

export default NewsPage