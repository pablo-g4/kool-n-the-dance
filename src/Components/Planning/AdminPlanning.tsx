import React, { useState, useCallback, useEffect } from 'react'
import { Calendar, momentLocalizer, dayjsLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import AddOrEditPlanning from './AddOrEditPlanning'
import { createPlanning, updatePlanning, deletePlanning, getAllPlanning } from '../../Controllers/planning'
import { Planning } from '../../Models/Planning'
import _ from 'lodash'

import "react-big-calendar/lib/Week" 
import "react-big-calendar/lib/TimeGrid"
import 'moment/locale/fr'


const AdminPlanning = () => {
    
    const [isAddOrEditPlanningOpen, setIsAddOrEditPlanningOpen] = useState<boolean>(false)
    const [currentStartDate, setCurrentStartDate] = useState<Date>()
    const [currentEndDate, setCurrentEndDate] = useState<Date>()
    const [allPlanning, setAllPlanning] = useState<Planning[]>([])
    const [planningToUpdate, setPlanningToUpdate] = useState<Planning>()

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

    const fetchPlanning = useCallback(async () => {
        const planning = await getAllPlanning()
        if(planning.length) {
            setAllPlanning(planning)
        }
    },[])


    const handleSelect = ({ start, end } : { start: Date, end: Date }) => {
        setCurrentStartDate(start)
        setCurrentEndDate(end)
        setIsAddOrEditPlanningOpen(true)
    }

    const handleClickOnSelectedPlanning = (planning: any) => {
        let planningToUpdate = _.find(allPlanning, (planningItem) => planningItem.id === planning.id )
        setPlanningToUpdate(planningToUpdate)
        setIsAddOrEditPlanningOpen(true)
    }

    const setDates = async (form: any) => {
                
        let newPlanning = new Planning()
        newPlanning.title = form.title
        newPlanning.recurrence = form.recurrence
        newPlanning.associatedCourses = form.associatedCourses
        if(currentStartDate && currentEndDate) {
            newPlanning.startDate = currentStartDate.getTime()
            newPlanning.endDate = currentEndDate.getTime()
        }

        if(form.start && form.end) {
            newPlanning.startDate = form.start
            newPlanning.endDate = form.end
        }

        if(form.id) newPlanning.id = form.id

        if(newPlanning.id) {
            await updatePlanning(newPlanning)
            let allPlaning = _.map(allPlanning, (planningItem) => {
                if(planningItem.id === newPlanning.id) return newPlanning
                return planningItem
            })
            setAllPlanning(allPlaning)
            setPlanningToUpdate(undefined)
        } else {
            newPlanning.id = await createPlanning(newPlanning)
            setAllPlanning([
                ...allPlanning,
                newPlanning
            ])
        }


        setCurrentStartDate(undefined)
        setCurrentEndDate(undefined)

        setIsAddOrEditPlanningOpen(false)
    }

    const handleCloseModal = () => {
        if(planningToUpdate) setPlanningToUpdate(undefined)
        setIsAddOrEditPlanningOpen(false)
    }

    const convertPlanningToEvents = () => {
        return _.map(allPlanning, (planning) => ({
            id: planning.id,
            title: planning.title,
            start: new Date(planning.startDate),
            end: new Date(planning.endDate)
        }))
    }



      useEffect(() => {
        fetchPlanning()
      }, [])



    return (
        <>
            {
                isAddOrEditPlanningOpen &&
                <AddOrEditPlanning
                    planningToUpdate={planningToUpdate}
                    isOpen={isAddOrEditPlanningOpen}
                    setIsOpen={handleCloseModal}
                    submitPlanning={setDates}
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
                        8
                    )
                }
                max={
                    new Date(
                      today.getFullYear(), 
                      today.getMonth(), 
                      today.getDate(), 
                      18
                    )
                  }

                  
                onSelectEvent={handleClickOnSelectedPlanning}
                
                onSelectSlot={handleSelect}
            />
        </>
    )
}

export default AdminPlanning