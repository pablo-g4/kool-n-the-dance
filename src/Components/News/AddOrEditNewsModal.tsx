import React, { useEffect, useState } from 'react'
import { Modal, Group, Button } from '@mantine/core';
import { News } from '../../Models/News'
import { createNews, updateNews } from '../../Controllers/news';
import './news.css';
import attachmentIcon from './attach-16.png';
import { uploadFile } from '../../Controllers/file';

const AddOrEditNewsModal = (
    {
        currentNews,
        setAllNews, 
        isOpen, 
        setIsOpen,
        setCurrentNews,
    } : 
    {
        currentNews?: News,
        setAllNews: React.Dispatch<React.SetStateAction<News[]>>, 
        isOpen: boolean, 
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
        setCurrentNews?: React.Dispatch<React.SetStateAction<News | undefined>>,
    }) => {

        const [form, setForm] = useState<any>({
            title: '',
            description: '',
            attachedFileUrl: '',
            isActive: true,
        })

        const [uploadFileForm, setUploadFileForm] = useState()

        const handleSubmit = async (event: any) => {
            event.preventDefault();

            const {
                title, 
                description, 
                attachedFile,
                isActive, 
            } = form


            let newNews = new News()
            newNews.title = title
            newNews.description = description
            newNews.attachedFileUrl = attachedFile
            newNews.isActive = isActive

            let downloadUrl          
            if(uploadFile) {
                downloadUrl = await uploadFile(uploadFileForm)
                if(downloadUrl) newNews.attachedFileUrl = downloadUrl
            } 

            if(!currentNews) {
                await addNews(newNews)
            }
            else {
                await updateCurrentNews(newNews)
            }
            if(currentNews && setCurrentNews) setCurrentNews(undefined)
            setIsOpen(false);
        };

        const  handleInput = (event: any) => {
            const key = event.target.name
            const value = event.target.value
            setForm( (previousFormValues: any) => ( {...previousFormValues,  [key]: value }) );
        }


        

      const addNews = async (news:News): Promise<void> => {   
        const createdNewsId = await createNews(news)
        news.id = createdNewsId   
        setAllNews(oldNews => [...oldNews, news]);
      }

      const updateCurrentNews = async (news: News): Promise<void> => {
        if(currentNews && currentNews.id) {
            news.id = currentNews?.id            
            await updateNews(news)
            setAllNews((oldNewsState) => oldNewsState.map(newsItem => { return newsItem.id === news.id ? news : newsItem }))
        }
      }

      const onFileChange = (e: any ) => {
        e.preventDefault();        
        setUploadFileForm((previousFormValues: any) => ( e.target.files[0]))
    }


      const handleCloseModal = (): void => {
        setIsOpen(false);
      }

      useEffect(() => {
        if(currentNews) {
            console.log(new Date(currentNews.updatedDate));
            
            setForm(currentNews)
        }
      },[currentNews])

    return (
        <>
            <Modal opened={isOpen} onClose={() => setIsOpen(false)} size='full' title="Ajouter/modifier un article" centered>
                <div>
                    <div className="row">
                        <form onSubmit={handleSubmit} action='' method=''>
                            <div className="row mb-3">
                                <div className='col mb-3 d-flex flex-column'>
                                    <label className='form-label' htmlFor='titreArticle'>Titre Article : </label>
                                    <input className='mt-2' onChange={handleInput} value={form.title} id="titreArticle" type="text" name='title' placeholder="Titre Article" required />
                                </div>
                                <div className='col'>
                                    <label className='btnAjout d-flex flex-column' htmlFor="attachedFileUrl">
                                        <span>
                                            <img src={attachmentIcon} />
                                            Ajouter une pi??ce jointe
                                        </span>
                                        {
                                         form.attachedFile && (<abbr>{form.attachedFileUrl}</abbr>)
                                        }
                                        <input className='mt-2' hidden onChange={onFileChange} type="file" id='attachedFileUrl' name='attachedFileUrl' accept="image/png, image/jpg, image/gif, image/jpeg" />
                                    </label>
                                </div>
                            </div>
                            <div className='mb-3 d-flex flex-column'>
                                <label className='form-label' htmlFor='description'> Description : </label>
                                <textarea onChange={handleInput} value={form.description} rows={6} cols={79} name='description' maxLength={200} required />
                            </div>

                            <div className='mb-3 text-center d-flex flex-column'>
                                <label className="form-check-label" htmlFor="isActive"> Visible ?</label>
                                <input type="checkbox" id="require" name="isActive" checked={form.isActive} onChange={() => setForm((previousFormValues: any) => ({ ...previousFormValues, isActive: !form.isActive }))} />
                            </div>

                            <div className='mb-3 text-center d-flex flex-row justify-content-around'>
                                <input type="button" value='Annuler' className='btnNoir' onClick={handleCloseModal} />
                                <input type="submit" value='Valider' className='btnRouge' />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddOrEditNewsModal