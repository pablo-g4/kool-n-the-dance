import React, { useEffect } from 'react'
import { Modal, Group, Button } from '@mantine/core';
import { News } from '../../Models/News'
import { createNews } from '../../Controllers/news';
import './news.css';
import attachmentIcon from './attach-16.png';

const AddOrEditNewsModal = (
    {
        currentNews,
        setAllNews, 
        isOpen, 
        setIsOpen
    } : 
    {
        currentNews?: News,
        setAllNews: React.Dispatch<React.SetStateAction<News[]>>, 
        isOpen: boolean, 
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    }) => {

        const handleSubmit = async (event: any) => {
            event.preventDefault();
            const title = event.target.elements.title.value;
            const description = event.target.elements.description.value;
            const attachedFile = event.target.elements.attachedFile.value;
            const isActive = event.target.elements.isActive.value;
            let newNews = new News()
            newNews.title = title
            newNews.description = description
            newNews.attachedFile = attachedFile
            newNews.isActive = isActive
        
            const createdNewsId = await createNews(newNews)
            newNews.id = createdNewsId
            addNews(newNews);
            setIsOpen(false);
        };

      const addNews = (news:News) => {
        setAllNews(oldNews => [...oldNews, news]);
      }
    

      const handleCloseModal = () => {
        setIsOpen(false);
      }

    return (
        <>
            <Modal opened={isOpen} onClose={() => setIsOpen(false)} size='full' className="modalActu" title="" centered>
            <div className='article'>
                <a className='txtTitre'>Ajouter Article</a>



                <form onSubmit={handleSubmit} action='' method=''>
            <label className='txtLabel' htmlFor='titreArticle'>Titre Article : </label><br></br><br></br>
            <input id="titreArticle" type="text" name='title' placeholder="Titre Article" required></input><br></br><br></br>


            <button className='btnAjout'><img src={attachmentIcon}></img> Ajouter une pièce jointe</button>
            <input type="file" id='file' className='file' name='attachedFile' accept="image/png, image/jpg, image/gif, image/jpeg"></input><br></br><br></br>
            <br></br><br></br>
            <label className='txtLabel labelDesc' htmlFor='desc'>Description : </label>
            <textarea rows={6} cols={79} name='description' className='desc' maxLength={200} required></textarea><br></br><br></br>
            

            <br></br>
            <input type="button" value='Annuler' className='btnNoir' onClick={handleCloseModal} ></input>
            <input type="submit" value='Valider' className='btnRouge'></input>
            <br></br><br></br>
            <div className='visible'>
              <label>Visible ?</label>

              <input type="radio" id="active" name="isActive" value="true" />
              <label>Oui</label>
              <input type="radio" id="avtive" name="isActive" value="false" />
              <label>Non</label>
            </div>

        </form>
        </div>
            </Modal>


        </>
    )
}

export default AddOrEditNewsModal