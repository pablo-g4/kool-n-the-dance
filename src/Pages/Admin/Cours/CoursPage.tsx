import React, { useState, useEffect } from 'react'

import _ from 'lodash'
import { Cours, COURSES_TYPES } from '../../../Models/Cours'
import CustomSwitch from '../../../Components/Switch/CustomSwitch'
import { CardCours } from '../../../Components/Cours/CardCours'
import { AddOrEditCours } from '../../../Components/Cours/AddOrEditCours'
import { createCours, getAllCoursEvenDisabled, updateCours, deleteCours } from '../../../Controllers/cours'
import { BsPlusLg } from 'react-icons/bs'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'

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

    const handleEditCours = (coursId: string) => {
        setCoursToUpdateId(coursId)
        setAddOrEditCoursModalIsOpen(true)
    }

    const handleDeleteCours = async (coursId: string) => {
        await deleteCours(coursId)
        setAllCours(_.filter(allCours, (cours) => cours.id !== coursId))
    }

    const handleCloseModal = () => {
        setCoursToUpdateId('')
        setAddOrEditCoursModalIsOpen(false)
    }


    useEffect(() => {
        const fetchAllCours = async () => {
            const allCours = await getAllCoursEvenDisabled()
            if(allCours.length) setAllCours(allCours)
        }
        fetchAllCours()
    },[])

    return (
        <div className='w100'>
            <div className="mt-4 d-flex flex-row justify-content-between">
                <h1>Gestion des cours</h1>
                <button style={{
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    border: 'none'
                }} onClick={() => setAddOrEditCoursModalIsOpen(true)} className='text-white' > <BsPlusLg size={20} /> Ajouter un cours</button>
            </div>
            <CustomSwitch
                value={switchValue}
                setValue={() => setSwitchValue(!switchValue)}
                firstLabel='En ligne'
                secondLabel='Archives'
            />
            {
                addOrEditCoursModalIsOpen && (
                    <AddOrEditCours handleCloseModal={handleCloseModal} coursToUpdate={_.find(getFilteredCours(), ['id', coursToUpdateId])} isOpen={addOrEditCoursModalIsOpen} setIsOpen={setAddOrEditCoursModalIsOpen} submitForm={submitAddOrEditCours} />
                )
            }
                
            <h2>Danses</h2>
            <div className="row m-1">
                {
                    getDanseCours().length ? _.map(getDanseCours(), (cours, index) => (
                        <div key={index} style={{
                            maxWidth: '350px',
                            height: '400px'
                        }} className='col-4 mb-4'>
                            <CardCours cours={cours}>
                                <div className='d-flex justify-content-end'>
                                    <AiFillEdit size={25} className="icon" onClick={() => handleEditCours(cours.id)} />
                                    <AiOutlineClose size={25} className="icon" onClick={() => handleDeleteCours(cours.id)} />
                                </div>
                            </CardCours>
                        </div>
                    )) : <p>Créer votre premier cours de danse</p>
                }
            </div>

             <h2>Fitness et bien être</h2>
            <div className="row m-1">
            {
                   getFitnessCours().length ? _.map(getFitnessCours(), (cours, index) => (
                        <div style={{
                            maxWidth: '350px',
                            height: '400px'
                        }}  key={index} className='col-4 mb-4'>
                           <CardCours cours={cours}>
                               <div className='d-flex justify-content-end'>
                                   <AiFillEdit size={25} className="icon" onClick={() => handleEditCours(cours.id)} />
                                   <AiOutlineClose size={25} className="icon" onClick={() => handleDeleteCours(cours.id)} />
                               </div>
                           </CardCours>
                        </div>
                    )) : <p>Créer votre premier cours de fitness</p>
                }
            </div>
        </div>
    )
}
