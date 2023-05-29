import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import CardRight from '../../Components/CardRight/CardRight'
import { getAllNews } from '../../Controllers/news'
import { useCallback, useEffect } from 'react'
import { News } from '../../Models/News'
import { NewsVM } from '../../viewModels/NewsVM'
import { getAllFiles } from '../../Controllers/files'
import _ from 'lodash'

export const NewsPage = () => {

  const [allNewsVM, setAllNewsVM] = useState<NewsVM[]>([])

  const fetchAndSetAllNews = useCallback(async () => {

    const allNews = await getAllNews()
    const allCurrentNewsVM = _.map(allNews, news => NewsVM.fromNews(news))

    if (allCurrentNewsVM.length) {
      const allFiles = await getAllFiles()
      _.map(allCurrentNewsVM, (currentNewsVM) => {
        const foundAttachedFile = _.find(allFiles, (file) => file.id === currentNewsVM.attachedFileId)
        const foundImageFile = _.find(allFiles, file => file.id === currentNewsVM.imageFileId)
        if (foundAttachedFile) currentNewsVM.attachedFile = foundAttachedFile
        if (foundImageFile) currentNewsVM.imageFile = foundImageFile
      })
      setAllNewsVM(_.orderBy(allCurrentNewsVM, 'creationDate', 'desc'))
    }
  }, [])

  useEffect(() => {
    fetchAndSetAllNews()
  }, [])

  return (
    <div className='actualite-page'>
      <a className='titre-news text-center my-7'> Actualités </a>
      <div className='row-v2'>
        {
          allNewsVM.length ? (
            <>
              <div className='col-md-7 col-xs-11'>
                {
                  _.map(allNewsVM, (news, index) => <Card newsVM={news} key={index} />)
                }
              </div>
              <div className='col-5 d-none d-md-block'>
                <CardRight newsVM={allNewsVM[0]} />
              </div>
            </>
          ) : <h3>Aucune actualité actuellement</h3>
        }
      </div>
    </div>
  )
}