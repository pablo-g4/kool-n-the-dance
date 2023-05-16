import React, { useState, useEffect } from 'react'

import _ from 'lodash'
import { Cours, COURSES_TYPES } from '../../../Models/Cours'
import CustomSwitch from '../../../Components/Switch/CustomSwitch'
import { CardCours } from '../../../Components/Cours/CardCours'
import { AddOrEditCours } from '../../../Components/Cours/AddOrEditCours'
import { createCours, getAllCours, updateCours } from '../../../Controllers/cours'

export const CoursPage = () => {

    const [switchValue, setSwitchValue] = useState(true)
    const [allCours, setAllCours] = useState<Cours[]>([])
    const [coursToUpdateId, setCoursToUpdateId] = useState<string>()
    const [addOrEditCoursModalIsOpen, setAddOrEditCoursModalIsOpen] = useState(false)

    const submitAddOrEditCours = async (form: any) => {
        let newCours = new Cours()
        newCours.title = form.title
        newCours.description = form.description
        newCours.imageUrl = form.imageUrl
        newCours.courseType = form.courseType
        if(form.id) {
            newCours.id = form.id
            newCours.isActive = form.isActive
            await updateCours(newCours)
            let updatedAllCours = allCours.map((cours) => {
                if(cours.id === newCours.id) return newCours
                else return cours
            })
            console.log('updatedAllCours', updatedAllCours);
            
            setAllCours(updatedAllCours)
        } else {
            newCours.id = await createCours(newCours)
            setAllCours([...allCours, newCours])
        }

        setCoursToUpdateId('')
    }

    const getFilteredCours = () => _.filter(allCours,['isActive', switchValue])

    const getDanseCours = () => _.filter(getFilteredCours(), ['courseType', COURSES_TYPES.DANSES])

    const getFitnessCours = () => _.filter(getFilteredCours(), ['courseType', COURSES_TYPES.FITNESS])

    const handleEdit = (coursId: string) => {
        setCoursToUpdateId(coursId)
        setAddOrEditCoursModalIsOpen(true)
    }

    const handleCloseModal = () => {
        setCoursToUpdateId('')
        setAddOrEditCoursModalIsOpen(false)
    }


    useEffect(() => {
        const fetchAllCours = async () => {
            const allCours = await getAllCours()
            setAllCours(allCours)
        }
        fetchAllCours()
    },[])

    return (
        <div className='mx-4'>
            <div className="mt-4 d-flex flex-row justify-content-between">
            <h1>Gestion des cours</h1>
            <button style={{
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    border: 'none'
                }} onClick={() => setAddOrEditCoursModalIsOpen(true)} className='text-white'>+ Ajouter un forfait basique</button>
                {
                    addOrEditCoursModalIsOpen && (
                        <AddOrEditCours handleCloseModal={handleCloseModal} coursToUpdate={_.find(getFilteredCours(), ['id', coursToUpdateId])} isOpen={addOrEditCoursModalIsOpen} setIsOpen={setAddOrEditCoursModalIsOpen} submitForm={submitAddOrEditCours} />
                    )
                } 
            </div>
            <CustomSwitch
                value={switchValue}
                setValue={() => setSwitchValue(!switchValue)}
                firstLabel='En ligne'
                secondLabel='Archives'
            />
            <h2>Danses</h2>
             <div className="row">
                {
                   getDanseCours().length ? _.map(getDanseCours(), (cours, index) => (
                        <div className='col-3'>
                           <CardCours key={cours.id} cours={cours}>
                               <div className='d-flex justify-content-end'>
                                   <span onClick={() => handleEdit(cours.id)}>Modifier</span>
                                   <span className='px-2'>Supprimer</span>
                               </div>
                           </CardCours>
                        </div>
                    )) : 'Aucun cours en "Danse" pour le moment.'
                }
             </div>

             <h2>Fitness et bien être</h2>

            <div className="row">
            {
                   getFitnessCours().length ? _.map(getFitnessCours(), (cours, index) => (
                        <div className='col-3'>
                           <CardCours key={cours.id} cours={cours}>
                               <div className='d-flex justify-content-end'>
                                   <span onClick={() => handleEdit(cours.id)}>Modifier</span>
                                   <span className='px-2'>Supprimer</span>
                               </div>
                           </CardCours>
                        </div>
                    )) : 'Aucun cours en "fitness" pour le moment.'
                }
            </div>
        </div>
    )
}
