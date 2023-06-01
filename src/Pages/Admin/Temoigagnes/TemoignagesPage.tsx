import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import CardTemoignage from '../../../Components/cardTemoignage/cardTemoignagne'
import { AddOrEditTemoignagesModal } from '../../../Components/Temoignages/AddOrEditTemoignagesModal'
import { createTemoignagne, deleteTemoignage, getAllTemoignagesEvenDisabled, updateTemoignage } from '../../../Controllers/temoignages'
import { Temoignages } from '../../../Models/Temoignages'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { Button } from '@mantine/core'
import { BsPlusLg } from 'react-icons/bs'

export const TemoignagesPage = () => {

  const [ allTemoignages, setAllTemoignages ] = useState<Temoignages[]>([])

  const [ currentTemoignagne, setCurrentTemoignagne ] = useState<Temoignages>()

  const [ isOpenAddOrEditTemoignagesModal, setIsOpenAddOrEditTemoignagesModal ] = useState<boolean>(false)

  const handleCloseModal = () => {
    setIsOpenAddOrEditTemoignagesModal(false)
    if(currentTemoignagne) setCurrentTemoignagne(undefined)
  }

  const handleTemoignageEdit = (temoignage: Temoignages) => {
    setCurrentTemoignagne(temoignage)
    setIsOpenAddOrEditTemoignagesModal(true)
  }

  const submitForm = async (form: any) => {
    let newTemoignage = new Temoignages()

    newTemoignage.prenom = form.prenom
    newTemoignage.nom = form.nom
    newTemoignage.description = form.description
    newTemoignage.imageUrl = form.imageUrl
    newTemoignage.stars = form.stars

    if(form.id) {
      newTemoignage.id = form.id
      await updateTemoignage(newTemoignage)
      const allTemoignagesList = _.map(allTemoignages, (temoignage) => {
        if(temoignage.id === newTemoignage.id  ) return newTemoignage
        else return temoignage
      })
     setAllTemoignages(allTemoignagesList)
    } else {
      newTemoignage.id = await createTemoignagne(newTemoignage)
      setAllTemoignages([...allTemoignages, newTemoignage])
    }


    setIsOpenAddOrEditTemoignagesModal(false)
    setCurrentTemoignagne(undefined)
  }

  const handleDelete = async (temoignageId: string) => {
    setAllTemoignages(_.filter(allTemoignages, temoignage => temoignage.id !== temoignageId))
    await deleteTemoignage(temoignageId)
  }

  const fetchAndSetTemoignages = async () => {
    const temoignagnes = await getAllTemoignagesEvenDisabled()
    if (temoignagnes.length) setAllTemoignages(temoignagnes)
  }

  useEffect(() => {  
    fetchAndSetTemoignages()
  }, [])
  


  return (
    <>
      <div className='d-flex flex-row justify-content-between p-2'>
        <h1>Gestion des témoignages</h1>
        <Button style={{
          backgroundColor: '#fb3741',
          borderRadius: '40px',
          display: 'flex',
          fontFamily: 'Alice',
          fontSize: '30px',
          height: '50px',
          marginBottom: '2.5rem',
          textAlign: 'center',
          width:' 300px'
        }} onClick={() => setIsOpenAddOrEditTemoignagesModal(true)}>
          <BsPlusLg size={18} /> 
          <span style={{
            fontSize: '18px'
          }} >Ajouter un nouveau témoignage</span> 
        </Button>
      </div>
      {
        isOpenAddOrEditTemoignagesModal && (
          <AddOrEditTemoignagesModal isOpen={true} handleCloseModal={handleCloseModal} submitTemoignages={submitForm} temoignageToUpdate={currentTemoignagne} />
        )
      }
      <div>
        {
          allTemoignages.length ? (
            <div className='row'>
              {_.map(allTemoignages, (temoignage, index) => (
                <div key={index} className="col-md-8 bb-grey">
                  <CardTemoignage temoignage={temoignage}>
                    <div className="d-flex justify-content-end">
                      <AiFillEdit size={25} className="icon" onClick={() => handleTemoignageEdit(temoignage)}  />
                      <AiOutlineClose size={25} className="icon" onClick={() => handleDelete(temoignage.id)}   />
                    </div>
                  </CardTemoignage>
                  <hr />
                </div>
              ))}
            </div>
          ) : 'Ajouter un nouveau témoignage'
        }
      </div>
    </>
  )
}
