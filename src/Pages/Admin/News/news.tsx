import React, { useState } from 'react'
import Card from '../../../Components/Card/Card';
import { getAllNews } from '../../../Controllers/news'
import { useCallback, useEffect } from 'react';
import AddOrEditNewsModal from '../../../Components/News/AddOrEditNewsModal';
import { News } from '../../../Models/News';
import { Button } from '@mantine/core';
import DeleteConfirmationModal from '../../../Components/Global/DeleteConfirmationModal';
import { deleteNews } from '../../../Controllers/news';
import { BsPlusLg } from 'react-icons/bs'
import "./news.css";


const AdminNews = () => {

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
    <>
    <div className='actualite-page'>
      <h1 className='titre-actualite-admin text-center my-7'> Gestion Actualité </h1>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
            <Button className='button-add' onClick={() => setIsAddOrEditModalOpen(true)}>
              <BsPlusLg />
              <span className='label-button'>
                Ajouter actualité
              </span>
            </Button>
          {
            allNews.map((news, index) => <Card news={news} setCurrentNews={setCurrentNews} setIsOpen={setIsAddOrEditModalOpen} displayDeleteConfirmationModal={openDeleteConfirmationModal} key={index} />)
          }
        </div>
      </div>
      {
        isAddOrEditModalOpen &&
        <AddOrEditNewsModal currentNews={currentNews} setAllNews={setAllNews} isOpen={isAddOrEditModalOpen} setIsOpen={closeAddOrEditModal} />
      }
      {
        isDeleteConfirmationModalOpen && 
        <DeleteConfirmationModal isOpen={isDeleteConfirmationModalOpen} closeModal={closeDeleteConfirmationModal} deleteItem={deleteCurrentNews} elementToDelete={currentNews}/>
      }
    </div>
    </>
  )
}

export default AdminNews



