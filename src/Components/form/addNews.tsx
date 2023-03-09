import { Button } from '@mantine/core';
import React, { useState } from 'react';
import { News } from '../../Models/News'
import { createNews } from '../../Controllers/news';
import { logInWithEmailAndPassword } from '../../Authentification/authentication';

const AddNews = () => {

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

    const createdNews = await createNews(newNews)   
    console.log('createdNews', createdNews);
     
    
  };

  return (
    <form onSubmit={handleSubmit} action=''>
        <label htmlFor='title'>Titre</label>
        <input type="text" name='title' required></input><br></br>

        <label>Description</label>
        <input type="text" name='description' required></input><br></br>

        <label htmlFor='attachedFile'>Ajouter un fichier</label>
        <input type="file" id='attachedFile' name='attachedFile'></input><br></br>

        <label>active ?</label><br></br>

        <input type="radio" id="isActive" name="isActive" value="true" />
        <label>Oui</label><br></br>
        <input type="radio" id="avtive" name="isActive" value="false" />
        <label>Non</label><br></br>

        <input type="submit" value="submit"></input><br></br>
    </form>
  )
}

export default AddNews