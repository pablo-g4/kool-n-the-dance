import React from 'react'
import './news.css'
import attachmentIcon from './attach-16.png'

const addNews = () => {
  return (
    <div className="card">
      <div className='article'>
        <a className='txtTitre'>Ajouter Article</a>

        <form action='' method=''>
            <label className='txtLabel' htmlFor='titreArticle'>Titre Article : </label><br></br><br></br>
            <input id="titreArticle" type="text" name='titre' placeholder="Titre Article" required></input><br></br><br></br>


            <button className='btnAjout'><img src={attachmentIcon}></img> Ajouter une pièce jointe</button>
            <input type="file" id='file' className='file' name='ajoutFichier' accept="image/png, image/jpg, image/gif, image/jpeg"></input><br></br><br></br>
            <br></br><br></br>
            <label className='txtLabel labelDesc' htmlFor='desc'>Description : </label>
            <textarea rows={6} cols={79} name='description' className='desc' required></textarea><br></br><br></br>
            


            <br></br>
            <a href=''><input type="button" value='Annuler' className='btnNoir'></input></a>
            <input type="submit" value='Valider' className='btnRouge'></input>
            <br></br><br></br>
            <div className='visible'>
              <label>Visible ?</label>

              <input type="radio" id="active" name="active" value="true" />
              <label>Oui</label>
              <input type="radio" id="avtive" name="active" value="false" />
              <label>Non</label>
            </div>

        </form>
      </div>

    </div>
  )
}

export default addNews