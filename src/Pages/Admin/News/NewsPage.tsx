import React, { useState } from 'react'
import Card from '../../../Components/Card/Card'
import { getAllNews } from '../../../Controllers/news'
import { useCallback, useEffect } from 'react'
import AddOrEditNewsModal from '../../../Components/News/AddOrEditNewsModal'
import { Button } from '@mantine/core'
import { deleteNews } from '../../../Controllers/news'
import { BsPlusLg } from 'react-icons/bs'
import _ from 'lodash'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { createFile, deleteFile, getAllFiles, getAllFilesWithListOfIds, getFileWithId } from '../../../Controllers/files'
import { COLLECTION } from '../../../db/collection'
import "./news.css"
import { NewsVM } from '../../../viewModels/NewsVM'
import { createNews, updateNews } from '../../../Controllers/news'


export const NewsPage = () => {

  const [allNewsVM, setAllNewsVM] = useState<NewsVM[]>([])
  const [currentNewsVM, setCurrentNewsVM] = useState<NewsVM>()
  const [isAddOrEditModalOpen, setIsAddOrEditModalOpen] = useState(false)

  const fetchAndSetNews = useCallback(async () => {
    let allCurrentNews = await getAllNews()
    let allCurrentNewsVM = _.map(allCurrentNews, news =>  NewsVM.fromNews(news))
    if(allCurrentNewsVM.length) {
      const allFiles = await getAllFiles()

      _.map(allCurrentNewsVM, currentNewsVM => {
        const foundAttachedFile = _.find(allFiles, (file) => file.id === currentNewsVM.attachedFileId )
        const foundImageFile = _.find(allFiles, file => file.id === currentNewsVM.imageFileId)
        if(foundAttachedFile) currentNewsVM.attachedFile = foundAttachedFile
        if(foundImageFile) currentNewsVM.imageFile = foundImageFile
      })
      
      setAllNewsVM(_.orderBy(allCurrentNewsVM, 'creationDate', 'desc'))
    } 
  }, [])

  const closeAddOrEditModal = () => {
    setIsAddOrEditModalOpen(false)
    setCurrentNewsVM(undefined)
  }

  const handleEditNews = (newsVM: NewsVM) => {
    setCurrentNewsVM(newsVM)
    setIsAddOrEditModalOpen(true)
  }

  const addOrEditNews = async (form: any) => {

    const {
      id = '',
      title,
      description,
      attachedFile,
      attachedFileId = '',
      imageFile,
      imageFileId = '',
      isActive,
    } = form

    let newNewsVM = new NewsVM()
    newNewsVM.title = title
    newNewsVM.description = description
    newNewsVM.isActive = isActive

    if (imageFile instanceof File && imageFileId) {
      await deleteFile(imageFileId)
      newNewsVM.imageFileId = await createFile(imageFile, COLLECTION.NEWS)
    } else {
      newNewsVM.imageFileId = imageFileId
      newNewsVM.imageFile = imageFile
    }

    if (attachedFile instanceof File && attachedFileId) {
      await deleteFile(attachedFileId)
      newNewsVM.attachedFileId = await createFile(attachedFile, COLLECTION.FILES)
    } else {
      newNewsVM.attachedFileId = imageFileId
      newNewsVM.attachedFile = imageFile
    }

    if (imageFile && !imageFileId) newNewsVM.imageFileId = await createFile(imageFile, COLLECTION.NEWS)

    if (attachedFile && !attachedFileId) newNewsVM.attachedFileId = await createFile(attachedFile, COLLECTION.FILES)

    if (newNewsVM.imageFileId && imageFile instanceof File) newNewsVM.imageFile.fileUrl = URL.createObjectURL(imageFile)

    if (newNewsVM.attachedFileId && attachedFile instanceof File) newNewsVM.attachedFile.fileUrl = URL.createObjectURL(attachedFile)


    if (!id) {
      newNewsVM.id = await createNews(newNewsVM.toNews())
      setAllNewsVM(oldNews => [newNewsVM, ...oldNews])
    } else {
        newNewsVM.id = id
        await updateNews(newNewsVM.toNews())
        setAllNewsVM((oldNewsVMState) => _.map(oldNewsVMState, newsItem => newsItem.id === newNewsVM.id ? newNewsVM : newsItem))
    }

    setCurrentNewsVM(undefined)
    setIsAddOrEditModalOpen(false)
  }



  const deleteCurrentNews = async (newsVM: NewsVM) => {
    if (newsVM.imageFileId) await deleteFile(newsVM.imageFileId)
    if (newsVM.attachedFileId) await deleteFile(newsVM.attachedFileId)
    await deleteNews(newsVM.id)
    setAllNewsVM((oldNewsState) => _.filter(oldNewsState, newsItem => newsItem.id !== newsVM.id ))
    setCurrentNewsVM(undefined)
  }

  useEffect(() => {
    fetchAndSetNews()
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
            allNewsVM.length ?
             ( _.map(allNewsVM, (newsVM, index) => <Card newsVM={newsVM} key={index} >
                <div>
                  <AiFillEdit className="icon" size={25} onClick={() => handleEditNews(newsVM)} />
                  <AiOutlineClose className="icon" size={25} onClick={() => deleteCurrentNews(newsVM)} />
                </div>
            </Card>)) : <h2>Ajouter votre première actualité</h2>
          }
        </div>
      </div>
      {
        isAddOrEditModalOpen &&
        <AddOrEditNewsModal currentNews={currentNewsVM} submitForm={addOrEditNews}  handleCloseModal={closeAddOrEditModal} />
      }
    </div>
    </>
  )
}