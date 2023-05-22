import React, { useState, useCallback, useEffect } from 'react'
import { Calendar, momentLocalizer, dayjsLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import AddOrEditPlanning from './AddOrEditPlanning'
import { createPlanning, updatePlanning, deletePlanning, getAllPlanning } from '../../Controllers/planning'
import { Planning } from '../../Models/Planning'
import _ from 'lodash'
import { getAllCours } from '../../Controllers/cours'
import { Cours } from '../../Models/Cours'
import { PlanningVM } from '../../viewModels/PlanningVM'

import "react-big-calendar/lib/Week" 
import 'moment/locale/fr'

// @ts-ignore
import * as TimeGrid from 'react-big-calendar/lib/TimeGrid'


const AdminPlanning = () => {
    
    const [isAddOrEditPlanningOpen, setIsAddOrEditPlanningOpen] = useState<boolean>(false)
    const [currentStartDate, setCurrentStartDate] = useState<Date>()
    const [currentEndDate, setCurrentEndDate] = useState<Date>()
    const [allPlanningVM, setAllPlanningVM] = useState<PlanningVM[]>([])
    const [planningToUpdate, setPlanningToUpdate] = useState<PlanningVM>()
    const [allCours, setAllCours] = useState<Cours[]>()

    moment.locale('fr', {
        week: {
            dow: 1,
            doy: 1
        }
    })
    const localizer = momentLocalizer(moment)

    const today = new Date()

    const formats = {
        timeGutterFormat: 'HH:mm',
    }


    const fetchAndSetAllData = async () => {

        let planningData = await getAllPlanning()
        let planningDataVM = planningData.map((planning) => PlanningVM.fromPlanning(planning))
        if(planningDataVM.length) setAllPlanningVM(planningDataVM)
        const allCours = await getAllCours()
        if(allCours.length) setAllCours(allCours)
    }


    const handleSelect = ({ start, end } : { start: Date, end: Date }) => {
        setCurrentStartDate(start)
        setCurrentEndDate(end)
        setIsAddOrEditPlanningOpen(true)
    }

    const handleClickOnSelectedPlanning = (planning: any) => {
        let planningToUpdate = _.find(allPlanningVM, (planningItem) => planningItem.id === planning.id )
        setPlanningToUpdate(planningToUpdate)
        setIsAddOrEditPlanningOpen(true)
    }

    const addEventToPlanning = async (form: any) => {
     
        let newPlanningVM = new PlanningVM()
        newPlanningVM.recurrence = form.recurrence
        newPlanningVM.coursId = form.coursId
               
        if(form.startDate && form.endDate)  {
            newPlanningVM.startDate = form.startDate.getTime() 
            newPlanningVM.endDate = form.endDate.getTime()
            newPlanningVM.setStart = form.startDate
            newPlanningVM.setEnd = form.endDate
        }

        if(form.id) newPlanningVM.id = form.id

        if(newPlanningVM.id) {
            await updatePlanning(newPlanningVM.toPlanning())
            
            let allPlaning = _.map(allPlanningVM, (planningItem) => {
                if(planningItem.id === newPlanningVM.id) return newPlanningVM
                return planningItem
            })

            setAllPlanningVM(allPlaning)
            setPlanningToUpdate(undefined)
        } else {

            newPlanningVM.id = await createPlanning(newPlanningVM.toPlanning())
            
            setAllPlanningVM([
                ...allPlanningVM,
                newPlanningVM
            ])
        }

        setCurrentStartDate(undefined)
        setCurrentEndDate(undefined)
        setIsAddOrEditPlanningOpen(false)
    }

    const getStartDateOrPlanningToUpdateCondition = () => {
        return isAddOrEditPlanningOpen && (currentStartDate || planningToUpdate)
    }

    const handleCloseModal = () => {
        if(planningToUpdate) setPlanningToUpdate(undefined)
        setIsAddOrEditPlanningOpen(false)
    }

    const convertPlanningToEvents = () => {

        _.map(allPlanningVM, (planningVM) => {
            const associatedCours = _.find(allCours, ['id', planningVM.coursId ])
            if(associatedCours) planningVM.setCours = associatedCours
        })

        return _.map(allPlanningVM, (planning) => ({
            id: planning.id,
            start: planning.start,
            end: planning.end,
            title: planning.cours.title ?? 'Aucun cours selectionné'
        }))

    }



      useEffect(() => {
        fetchAndSetAllData()
      }, [])



    return (
        <>
            {
                getStartDateOrPlanningToUpdateCondition() &&
                <AddOrEditPlanning
                    planningToUpdate={planningToUpdate}
                    isOpen={isAddOrEditPlanningOpen}
                    setIsOpen={handleCloseModal}
                    submitPlanning={addEventToPlanning}
                    cours={allCours}
                    startDate={currentStartDate}
                />
            }
            <Calendar
                views={["day", "agenda", "week", "month"]}
                culture='fr'
                selectable
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="week"
                events={convertPlanningToEvents()}
                formats={formats}
                timeslots={1}
                step={60}
                style={{ height: "100vh", padding: '4px' }}
                min={
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate(),
                        9
                    )
                }
                max={
                    new Date(
                      today.getFullYear(), 
                      today.getMonth(), 
                      today.getDate(), 
                      22
                    )
                  }

                  
                onSelectEvent={handleClickOnSelectedPlanning}
                
                onSelectSlot={handleSelect}
            />
        </>
    )
}

export default AdminPlanning