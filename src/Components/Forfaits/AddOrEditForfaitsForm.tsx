import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { createForfait, updateForfait, deleteForfait } from '../../Controllers/forfait'
import { Forfait } from '../../Models/Forfait'
import './addOrEditForfaits.css'

const AddOrEditForfaitsForm = ({ updateListOfForfaits, forfait, children } : { updateListOfForfaits: any, forfait ? : Forfait, children: any } ) => {


  const [form, setForm] = useState<any>({
    id: '',
    title: '',
    description: '',
    isBasic: true,
    isActive: true,
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    let newForfait = new Forfait()
    const descriptionArray = form.description.split('\n')

    newForfait.title = form.title    
    newForfait.description = descriptionArray
    newForfait.isBasic = form.isBasic
    newForfait.isActive = form.isActive

    if (form.id) {
      newForfait.id = form.id
      await updateForfait(newForfait)
    } else {
      newForfait.id = await createForfait(newForfait)
      setForm((prev: any) => ({ ...prev, id: newForfait.id }))
    }
    
    updateListOfForfaits(newForfait)
  }


  const handleInput = (event: any) => {
    event.preventDefault()
    const key = event.target.name
    const value = event.target.value
    setForm((prev: any) => ({...prev,  [key]: value }))
  }

  useEffect(() => {
    setForm({
      id: forfait?.id,
      title: forfait?.title,
      description: forfait?.description.join('\n'),
      isBasic: forfait?.isBasic,
      isActive: forfait?.isActive
    })
  }, [forfait])

  return (
    <div style={{
      border: '2px solid black',
      borderRadius: '5px'
    }} className='p-2'>
      <form className='d-flex flex-column' onSubmit={handleSubmit}>
        <div className='d-flex flex-row justify-content-between'>
          <div className='d-flex flex-column'>
            <label htmlFor="courseName">Nom du forfait : </label>
            <input className='mt-2' onChange={handleInput} value={form.title} name='title' type="text" placeholder="Nom du forfait" required />
          </div>
          {
            children
          }
        </div>
        <div className='d-flex flex-column mt-2'>
          <label htmlFor="courseName">Description : </label>
          <textarea placeholder='Description' className='mt-2' onChange={handleInput} value={form.description} cols={30} rows={10} name='description' />
        </div>
        <div className='mt-2 d-flex justify-content-end'>
          <button onSubmit={handleSubmit} className='bg-dark text-white'>
            {
              form.id ? 'Modifier' : 'Nouveau'
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddOrEditForfaitsForm