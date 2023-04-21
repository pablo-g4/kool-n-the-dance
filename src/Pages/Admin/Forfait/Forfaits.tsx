import React, { useState, useEffect, useCallback } from 'react'
import '../../../Components/Forfaits/addOrEditForfaits.css'
import AddOrEditForfaitsForm from '../../../Components/Forfaits/AddOrEditForfaitsForm'
import { getAllForfaits, deleteForfait, createForfait, updateForfait } from '../../../Controllers/forfait'
import { Forfait } from '../../../Models/Forfait'
import { AiOutlineClose } from 'react-icons/ai'
import DeleteConfirmationModal from '../../../Components/Global/DeleteConfirmationModal';
import AddOrEditCustomForfaitModal from '../../../Components/Forfaits/AddOrEditCustomForfaitModal'

const Forfaits = () => {

    const [allForfaits , setAllForfaits] = useState<Forfait[]>([])
    const [addOrEditCustomForfaitModalIsOpen, setAddOrEditCustomForfaitModalIsOpen] = useState<boolean>(false)

    const fetchData = useCallback(async () => {
        const forfaits = await getAllForfaits()
        if(forfaits.length){
            setAllForfaits(forfaits)
        }
      }, [])

    const createForfaitBasic = () => {
        const newForfait = new Forfait()
        setAllForfaits([...allForfaits, newForfait])
    }

    const createCustomForfait = async (customForfait: Forfait) => {
        if (customForfait.id) {
            await updateForfait(customForfait)
          } else {
            customForfait.id = await createForfait(customForfait)
          } 
    }

    const updateListOfForfaits = (forfaitToBeUpdated: Forfait) => {
        const newListOfForfaits = allForfaits.map((forfaitItem) => {   
            if(!forfaitItem.id) return forfaitToBeUpdated     
            return forfaitItem
        })
        setAllForfaits(newListOfForfaits)
    }

    const deleteCurrentForfait = async (forfaitToDeleteId: string, index: number) => {
        if(forfaitToDeleteId) {
            await deleteForfait(forfaitToDeleteId)
        }

        const newForfaits = allForfaits.filter((_, indexItem) => indexItem !== index);
        setAllForfaits(newForfaits)
    }

    
    useEffect(() => {
        fetchData()        
    },[])

    return (
        <div className='mx-4'>
            <h1>Gestion des forfaits</h1>
            <div className='d-flex flex-row justify-content-between'>
                <h2>Forfaits basiques</h2>
                <button style={{
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    border: 'none'
                }} onClick={createForfaitBasic} className='text-white'>+ Ajouter un forfait basique</button>
            </div>

            <div className='row g-4'>
                {
                    allForfaits?.map((forfaitItem, index) => (
                        <div key={index} className='col-lg-6 col-md-12 col-sm-12 p-2'>
                            <AddOrEditForfaitsForm updateListOfForfaits={updateListOfForfaits} forfait={forfaitItem} >
                                <a type='button' onClick={() => deleteCurrentForfait(forfaitItem.id, index)}> 
                                    <AiOutlineClose size={25}/>
                                </a>
                            </AddOrEditForfaitsForm >
                        </div>
                    ))
                }
            </div>

            <div className="mt-4 d-flex flex-row justify-content-between">
                <h2>Forfaits Personalisés</h2>
                <button style={{
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    border: 'none'
                }} onClick={() => setAddOrEditCustomForfaitModalIsOpen(true)} className='text-white'>+ Ajouter un forfait basique</button>
                {
                    addOrEditCustomForfaitModalIsOpen && (
                        <AddOrEditCustomForfaitModal isOpen={addOrEditCustomForfaitModalIsOpen} setIsOpen={setAddOrEditCustomForfaitModalIsOpen} submitForm={createCustomForfait} />
                    )
                }    
            </div>
        </div>
    )
}

export default Forfaits