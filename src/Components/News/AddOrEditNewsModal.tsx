import React, { useEffect, useState } from 'react'
import { Modal, Group, Text } from '@mantine/core';
import { News } from '../../Models/News'
import { createNews, updateNews } from '../../Controllers/news';
import { Dropzone, IMAGE_MIME_TYPE, DropzoneProps } from '@mantine/dropzone';
import { GrUploadOption } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
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
            if(uploadFileForm) {
                downloadUrl = await uploadFile(uploadFileForm)
                console.log(uploadFileForm)
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
            <Modal opened={isOpen}  withCloseButton={false} onClose={() => setIsOpen(false)} size='full' centered>
                <h1 className='title-modal'> Ajouter/modifier un article </h1>
                <div>
                    <div className="row">
                        <form onSubmit={handleSubmit} action='' method=''>
                            <div className="header-div row mb-2">
                                <div className='col mb-3 d-flex flex-column'>
                                    <label className='form-label' htmlFor='titreArticle'>Titre Article : </label>
                                    <input className='mt-2' onChange={handleInput} value={form.title} id="titreArticle" type="text" name='title' placeholder="Titre Article" required />
                                    <label className='btnAjout d-flex flex-column' htmlFor="attachedFileUrl">
                                <div>
                                    <img src={attachmentIcon} style={{marginRight: "2%"}} />
                                    <span>
                                        Ajouter une pièce jointe
                                    </span>
                                </div>
                                {
                                    form.attachedFile && (<abbr>{form.attachedFileUrl}</abbr>)
                                }
                                <input className='mt-2' hidden onChange={onFileChange} type="file" id='attachedFileUrl' name='attachedFileUrl' accept="image/png, image/jpg, image/gif, image/jpeg" />
                            </label>
                                </div>
                                <div className='col'>
                                <Dropzone 
                                    onDrop={(files) => console.log('accepted files', files)}
                                    onReject={(files) => console.log('rejected files', files)}
                                    maxSize={3 * 1024 ** 2}
                                    accept={IMAGE_MIME_TYPE}
                                >
                                    <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }}  className="dropzone">
                                        <div>
                                            <Text size="s" inline>
                                                Glisser ou importer des images articles.
                                            </Text>
                                        </div>
                                        <Dropzone.Accept>
                                            <GrUploadOption
                                                size="3.2rem"
                                                color="hsl(357, 96%, 60%)"
                                            />
                                        </Dropzone.Accept>
                                        <Dropzone.Reject>
                                            <AiOutlineClose
                                                size="3.2rem"
                                            />
                                        </Dropzone.Reject>
                                        <Dropzone.Idle>
                                            <GrUploadOption
                                                size="3.2rem"
                                                className='upload-icon'
                                            />
                                        </Dropzone.Idle>
                                    </Group>
                                </Dropzone>
                                </div>
                            </div>
                            <div className='mb-2 d-flex flex-column'>
                                <label className='form-label' htmlFor='description'> Description : </label>
                                <textarea onChange={handleInput} value={form.description} rows={6} cols={79} name='description' maxLength={200} required />
                            </div>

                            <div className='mb-3 text-center d-flex flex-column'>
                                <label className="form-check-label" htmlFor="isActive"> Visible ?</label>
                                <input type="checkbox" id="require" name="isActive" checked={form.isActive} onChange={() => setForm((previousFormValues: any) => ({ ...previousFormValues, isActive: !form.isActive }))} />
                            </div>

                            <div className='buttons-div mb-3 text-center d-flex flex-row justify-content-around'>
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