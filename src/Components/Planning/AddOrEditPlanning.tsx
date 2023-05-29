import React, { useState, useEffect, useRef } from 'react'
import { Modal, Select, Checkbox, Group } from '@mantine/core'
import _ from 'lodash'
import { RECURENCE_TYPES } from '../../Models/Planning'
import { TimeInput } from '@mantine/dates'
import { Cours } from '../../Models/Cours'
import { utils } from '../../Utils/utils'
import { PlanningVM } from '../../viewModels/PlanningVM'


const AddOrEditPlanning = ({ 
    planningToUpdate, 
    isOpen, 
    setIsOpen, 
    submitPlanning, 
    cours,
    startDate = new Date(),
    handleDeletePlanning,
} : { 
    planningToUpdate?: PlanningVM, 
    isOpen : boolean, 
    setIsOpen : any, 
    submitPlanning: any, 
    cours?: Cours[],
    startDate?: Date,
    handleDeletePlanning: any
}) => {

    const [form, setForm] = useState<any>(
        {
            id: '',
            title: '',
            recurrence: RECURENCE_TYPES.ONCE,
            coursId: '',
            endHour: '',
            startDate: startDate,
            endDate: _.cloneDeep(startDate)
        }
    )

    const onChangeRecurrence = (currentRecurrence : string) => {
        setForm({
            ...form,
            recurrence: currentRecurrence
        })
    }

    const onChangeCours = (cours : string) => {
        setForm({
            ...form,
            coursId: cours
        })
    }

    const getRecurrenceOptions = () => {
        return [
            { label: 'Une fois', value: RECURENCE_TYPES.ONCE },
            { label: 'Toutes les semaines pendant un an', value: RECURENCE_TYPES.ALL_WEEKS_DURING_ONE_YEAR }
        ]
    }

    const getCoursOptions = () => {
        return _.map(cours, (cours) => ({
            label: cours.title,
            value: cours.id
        }))
    }

    const handleEndHour = (event: any) => {
        setForm({...form, endHour: event.target.value})
    }

    const handleCloseModal = (): void => {
        setIsOpen(false)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        if(form.endHour) {
            const endHourArray = form.endHour.split(':')
            form.endDate = new Date(form.endDate.setHours(endHourArray[0], endHourArray[1]))           
        } 
        submitPlanning(form)
    }

    const isEndHourGreater = (endHour: any) => {
        let endDate = _.cloneDeep(form.startDate)
        return utils.getUnixTimeStamp(new Date(endDate.setHours(endHour[0], endHour[1]))) > utils.getUnixTimeStamp(form.startDate)
    }

    const loadData = () => {  
        setForm({
            ...form, 
            id: planningToUpdate?.id,
            recurrence: planningToUpdate?.recurrence,
            start: planningToUpdate?.start,
            end: planningToUpdate?.end,
            coursId: planningToUpdate?.coursId,
            endHour: planningToUpdate?.formattedEndHour,
            startDate: planningToUpdate?.start,
            endDate: planningToUpdate?.end
        })
    }

    useEffect(() => {
        if(planningToUpdate) loadData()
    }, [planningToUpdate])

    const getStartHourToDisplay = () => {
        let startDateMinutes = _.cloneDeep(form.startDate?.getMinutes()) ?? 0
        return `${form.startDate?.getHours()}h${startDateMinutes > 10 ? startDateMinutes : '0' + startDateMinutes}`
    }

    
  return (
      <>
          <Modal opened={isOpen} withCloseButton={false} onClose={setIsOpen} size='full' centered>
              <h1 className='text-center'>{form.id ? 'Modifier' : 'Ajouter'} un horaire</h1>
              <form onSubmit={handleSubmit} method='' action=''>
                  <div className='d-flex flex-column'>
                      <div className='mt-2'>
                          <label className='form-label' htmlFor="recurrence">Recurence :</label>
                          <Select
                              value={form.recurrence}
                              allowDeselect={false}
                              disabled={form.id}
                              data={getRecurrenceOptions()}
                              withAsterisk
                              onChange={onChangeRecurrence}
                          />
                      </div>
                      <div className='mt-2'>
                          <label className='form-label' htmlFor="recurrence">Cours associé :</label>
                          <Select
                              value={form.coursId}
                              onChange={onChangeCours}
                              allowDeselect={false}
                              data={getCoursOptions()}
                              withAsterisk
                          />
                      </div>
                      <div className='mt-2'>
                          <label className='form-label' htmlFor="recurrence">{
                              `Choisir horaire de fin à partir de ${getStartHourToDisplay()}`
                          }</label>
                          <TimeInput
                              required
                              value={form.endHour}
                              onChange={handleEndHour}
                              withAsterisk
                          />
                      </div>
                  </div>
                  {form.endHour && !isEndHourGreater(form.endHour.split(':')) && "Merci de renseigner une heure de fin plus tard que l'heure de début"}
                  <div className='mt-4 d-flex justify-content-around'>
                    <button type="button" onClick={handleCloseModal}>Annuler</button>
                    {
                        form.id && <button className="btn btn-danger" type="button" onClick={() => handleDeletePlanning(form.id)}>Delete</button>
                    }
                    <button type="submit" disabled={form.endHour && !isEndHourGreater(form.endHour.split(':'))}>Sauvegarder</button>
                  </div>
              </form>
          </Modal>
    </>
  )
}

export default AddOrEditPlanning