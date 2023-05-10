import React, { useState } from 'react'
import { Modal, Group, Text, Select } from '@mantine/core'
import _ from 'lodash'
import { RECURENCE_TYPES } from '../../Models/Planning'

const AddOrEditPlanning = ({ isOpen, setIsOpen, submitPlanning } : { isOpen : boolean, setIsOpen : any, submitPlanning: any}) => {

    const [form, setForm] = useState<any>({
        title: '',
        recurrence : RECURENCE_TYPES.ONCE
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

    const handleSubmit = (event: any) => {
        event.preventDefault()
        submitPlanning(form)
    }
  return (
      <>
          <Modal opened={isOpen} withCloseButton={false} onClose={() => setIsOpen(false)} size='full' centered>
              <h1 className='text-center'>Ajouter/modifier un horaire</h1>
              <form onSubmit={handleSubmit} method='' action=''>
                  <div className='d-flex flex-column'>
                      <label className='form-label' htmlFor='titreArticle'>Titre du planning : </label>
                      <input className='mt-2' onChange={handleTitle} value={form.title} id="titreArticle" type="text" name='title' placeholder="Titre Article" required />
                      <div>
                          <label className='form-label' htmlFor="recurrence">Recurence :</label>
                          <Select
                              value={form.recurrence}
                              allowDeselect={false}
                              data={getRecurrenceOptions()}
                              withAsterisk
                              onChange={onChangeRecurrence}
                          />
                      </div>
                  </div>
                  <div className='mt-4 d-flex justify-content-around'>
                    <button>Sauvegarder</button>
                    <button>Annuler</button>
                  </div>
              </form>
          </Modal>
    </>
  )
}

export default AddOrEditPlanning