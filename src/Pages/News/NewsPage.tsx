import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import CardRight from '../../Components/CardRight/CardRight'
import { getAllNews } from '../../Controllers/news'
import { useCallback, useEffect } from 'react'
import AddOrEditNewsModal from '../../Components/News/AddOrEditNewsModal'
import { News } from '../../Models/News'
import {  Group, Button } from '@mantine/core'
import DeleteConfirmationModal from '../../Components/Global/DeleteConfirmationModal'
import { deleteNews } from '../../Controllers/news'
import _ from 'lodash'

export const NewsPage = () => {

  const [allNews, setAllNews] = useState<News[]>([])
  const [currentNews, setCurrentNews] = useState<News | undefined>(undefined)
  const [isAddOrEditModalOpen, setIsAddOrEditModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);

  const fetchData = useCallback(async () => {
    let news = await getAllNews()
    if(news.length){
      news = _.orderBy(news, 'creationDate', 'desc')
      setAllNews(news)
    }
  }, [])
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='actualite-page'>
      <a className='titre-news text-center my-7'> Actualités </a>
      <div className='row-v2'>
        <div className='col-md-7 col-xs-11'>
          {
            allNews.map((news, index) => <Card news={news} setCurrentNews={setCurrentNews} key={index} />)
          }
        </div>
        <div className='col-5 d-none d-md-block'>
          {
            allNews && (
              <CardRight news={allNews[0]}  />
            )
          }
        </div>
      </div>
    </div>
  )
}