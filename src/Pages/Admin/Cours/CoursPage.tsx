import React, { useState, useEffect } from 'react'

import _ from 'lodash'
import { Cours, COURSES_TYPES } from '../../../Models/Cours'
import { Button } from '@mantine/core'
import CustomSwitch from '../../../Components/Switch/CustomSwitch'
import { CardCours } from '../../../Components/Cours/CardCours'
import { AddOrEditCours } from '../../../Components/Cours/AddOrEditCours'
import { createCours, getAllCoursEvenDisabled, updateCours, deleteCours } from '../../../Controllers/cours'
import { BsPlusLg } from 'react-icons/bs'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { CoursVM } from '../../../viewModels/CoursVM'
import { createFile, deleteFile, getAllFiles } from '../../../Controllers/files'
import { COLLECTION } from '../../../db/collection'
import { deleteAllPlanningWithCoursId } from '../../../Controllers/planning'
import { deleteCustomForfaitWithCoursId } from '../../../Controllers/forfait'

export const CoursPage = () => {

    const [switchValue, setSwitchValue] = useState(true)
    const [allCoursVM, setAllCoursVM] = useState<CoursVM[]>([])
    const [currentCours, setCurrentCours] = useState<CoursVM>()
    const [addOrEditCoursModalIsOpen, setAddOrEditCoursModalIsOpen] = useState(false)

    const submitAddOrEditCours = async (form: any) => {

        const {
            id,
            title,
            description,
            imageFile,
            imageFileId,
            courseType,
            isActive,
            place,
            price
        } = form


        let newCours = new CoursVM()
        newCours.title = title
        newCours.description = description
        newCours.courseType = courseType
        newCours.isActive = isActive
        newCours.place = place
        newCours.price = price

        if(imageFile instanceof File && imageFileId) {
            await deleteFile(imageFileId)
            newCours.imageFileId = await createFile(imageFile, COLLECTION.COURS)
        } else {
            newCours.imageFileId = imageFileId
            newCours.imageFile = imageFile
        }

        if (imageFile && !imageFileId) newCours.imageFileId = await createFile(imageFile, COLLECTION.COURS)

        if (newCours.imageFileId && imageFile instanceof File ) newCours.imageFile.fileUrl = URL.createObjectURL(imageFile)

        if(id) {
            newCours.id = id
            await updateCours(newCours.toCours())
            setAllCoursVM(oldNewsVMState => _.map(oldNewsVMState, coursVMItem => coursVMItem.id === newCours.id ? newCours : coursVMItem))
        } else {
            newCours.id = await createCours(newCours.toCours())
            setAllCoursVM([...allCoursVM, newCours])
        }

        setCurrentCours(undefined)
    }

    const getFilteredCours = () => _.filter(allCoursVM,['isActive', switchValue])

    const getDanseCours = () => _.filter(getFilteredCours(), ['courseType', COURSES_TYPES.DANSES])

    const getFitnessCours = () => _.filter(getFilteredCours(), ['courseType', COURSES_TYPES.FITNESS])

    const handleEditCours = (coursVM: CoursVM) => {
        setCurrentCours(coursVM)
        setAddOrEditCoursModalIsOpen(true)
    }

    const handleDeleteCours = async (coursVM: CoursVM) => {
        if (coursVM.imageFileId) await deleteFile(coursVM.imageFileId)
        await deleteAllPlanningWithCoursId(coursVM.id)
        await deleteCustomForfaitWithCoursId(coursVM.id)
        await deleteCours(coursVM.id)
        setAllCoursVM(_.filter(allCoursVM, (cours) => cours.id !== coursVM.id))
    }

    const handleCloseModal = () => {
        setCurrentCours(undefined)
        setAddOrEditCoursModalIsOpen(false)
    }


    useEffect(() => {
        const fetchAndSetAllCours = async () => {
            const allFiles = await getAllFiles()
            const allCours = await getAllCoursEvenDisabled()
            const allCurrentCoursVM = _.map(allCours, cours => CoursVM.fromCours(cours))
            if (allCurrentCoursVM.length) {
                _.map(allCurrentCoursVM, coursVM => {
                    if (coursVM.imageFileId) {
                        const foundImage = _.find(allFiles, ['id', coursVM.imageFileId])
                        if (foundImage) coursVM.imageFile = foundImage
                    }
                })
                setAllCoursVM(allCurrentCoursVM)
            } 
        }
        fetchAndSetAllCours()
    },[])

    return (
        <div className='w100'>
            <div className="mt-4 d-flex flex-row justify-content-between">
                <h1>Gestion des cours</h1>
                <Button className='button-add' onClick={() => setAddOrEditCoursModalIsOpen(true)} > <BsPlusLg /> <span className='label-button'> Ajouter un cours</span></Button>
            </div>
            <CustomSwitch
                value={switchValue}
                setValue={() => setSwitchValue(!switchValue)}
                firstLabel='En ligne'
                secondLabel='Archives'
            />
            {
                addOrEditCoursModalIsOpen && (
                    <AddOrEditCours handleCloseModal={handleCloseModal} coursToUpdate={currentCours} isOpen={addOrEditCoursModalIsOpen} setIsOpen={setAddOrEditCoursModalIsOpen} submitForm={submitAddOrEditCours} />
                )
            }
                
            <h2>Danses</h2>
            <div className="row m-1">
                {
                    getDanseCours().length ? _.map(getDanseCours(), (coursVM, index) => (
                        <div key={index} style={{
                            maxWidth: '350px',
                            height: '400px'
                        }} className='col-4 mb-4'>
                            <CardCours coursVM={coursVM}>
                                <div className='d-flex justify-content-end'>
                                    <AiFillEdit size={25} className="icon" onClick={() => handleEditCours(coursVM)} />
                                    <AiOutlineClose size={25} className="icon" onClick={() => handleDeleteCours(coursVM)} />
                                </div>
                            </CardCours>
                        </div>
                    )) : <p>Créer votre premier cours de danse</p>
                }
            </div>

             <h2>Fitness et bien être</h2>
            <div className="row m-1">
            {
                   getFitnessCours().length ? _.map(getFitnessCours(), (coursVM, index) => (
                        <div style={{
                            maxWidth: '350px',
                            height: '400px'
                        }}  key={index} className='col-4 mb-4'>
                           <CardCours coursVM={coursVM}>
                               <div className='d-flex justify-content-end'>
                                   <AiFillEdit size={25} className="icon" onClick={() => handleEditCours(coursVM)} />
                                   <AiOutlineClose size={25} className="icon" onClick={() => handleDeleteCours(coursVM)} />
                               </div>
                           </CardCours>
                        </div>
                    )) : <p>Créer votre premier cours de fitness</p>
                }
            </div>
        </div>
    )
}
