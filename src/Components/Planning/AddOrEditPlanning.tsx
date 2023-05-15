import React, { useState, useEffect } from 'react'
import { Modal, Select, Checkbox, Group } from '@mantine/core'
import _ from 'lodash'
import { RECURENCE_TYPES } from '../../Models/Planning'
import { Planning } from '../../Models/Planning'
import { COURSES_TYPE } from '../../Models/Forfait'

const AddOrEditPlanning = ({ planningToUpdate, isOpen, setIsOpen, submitPlanning } : { planningToUpdate?: Planning, isOpen : boolean, setIsOpen : any, submitPlanning: any}) => {

    const [form, setForm] = useState<any>({
        id: '',
        title: '',
        recurrence : RECURENCE_TYPES.ONCE,
        associatedCourses : []
    })

    const handleTitle = (event: any) => {
        setForm({ 
            ...form,
            title: event.target.value
         })
    }

    const onChangeRecurrence = (currentRecurrence : string) => {
        setForm({
            ...form,
            recurrence: currentRecurrence
        })
    }

    const getRecurrenceOptions = () => {
        return [
            { label: 'Une fois', value: RECURENCE_TYPES.ONCE },
            { label: 'Toutes les semaines', value: RECURENCE_TYPES.ALL_WEEKS }
        ]
    }

    const handleCloseModal = (): void => {
        setIsOpen(false)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        submitPlanning(form)
    }

    const loadData = () => {
        setForm({
            ...form, 
            id: planningToUpdate?.id,
            title: planningToUpdate?.title,
            recurrence: planningToUpdate?.recurrence,
            start: planningToUpdate?.startDate,
            end: planningToUpdate?.endDate,
            associatedCourses: planningToUpdate?.associatedCourses
        })
    }

    useEffect(() => {
        if(planningToUpdate) {
            loadData()
        }
    }, [planningToUpdate])
    
  return (
      <>
          <Modal opened={isOpen} withCloseButton={false} onClose={setIsOpen} size='full' centered>
              <h1 className='text-center'>Ajouter/modifier un horaire</h1>
              <form onSubmit={handleSubmit} method='' action=''>
                  <div className='d-flex flex-column'>
                      <label className='form-label' htmlFor='titreArticle'>Titre du planning : </label>
                      <input className='mt-2' onChange={handleTitle} value={form.title} id="titreArticle" type="text" name='title' placeholder="Titre Article" required />
                      <div className='mt-2'>
                          <label className='form-label' htmlFor="recurrence">Recurence :</label>
                          <Select
                              value={form.recurrence}
                              allowDeselect={false}
                              data={getRecurrenceOptions()}
                              withAsterisk
                              onChange={onChangeRecurrence}
                          />
                      </div>
                      <div className='mt-2'>
                          <label className='form-label' htmlFor="recurrence">Sélectionner les cours :</label>
                          <Checkbox.Group
                              onChange={(courses) => {
                                setForm({ ...form, associatedCourses: courses })
                                console.log({ ...form, associatedCourses: courses })
                                
                            }}
                              value={form.associatedCourses}
                          >
                              <Group mt="xs" noWrap>
                                  {
                                      COURSES_TYPE && _.map(COURSES_TYPE, (COURSE, index) => (
                                          <Checkbox key={index} value={COURSE} label={COURSE} />
                                      ))
                                  }
                              </Group>
                          </Checkbox.Group>
                      </div>
                  </div>
                  <div className='mt-4 d-flex justify-content-around'>
                    <button type="submit" >Sauvegarder</button>
                    <button type="button" onClick={handleCloseModal}>Annuler</button>
                  </div>
              </form>
          </Modal>
    </>
  )
}

export default AddOrEditPlanning