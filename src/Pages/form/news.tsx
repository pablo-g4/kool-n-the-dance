import { Button } from '@mantine/core'
import React from 'react'

function news() {
  return (
    <form action='' method=''>
        <label>Titre</label>
        <input type="text" name='titre' required></input><br></br>

        <label>Description</label>
        <input type="text" name='description' required></input><br></br>

        <label>Ajouter un fichier</label>
        <input type="file" name='ajoutFichier'></input><br></br>

        <label>active ?</label><br></br>

        <input type="radio" id="active" name="active" value="oui" />
        <label>Oui</label><br></br>
        <input type="radio" id="avtive" name="active" value="non" />
        <label>Non</label><br></br>

        <input type="submit"></input><br></br>
    </form>
  )
}

export default news