import React, { useState, useCallback, useEffect, useContext } from 'react'
import { Calendar, momentLocalizer, dayjsLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Planning } from '../../Models/Planning'
import { getAllPlanning } from '../../Controllers/planning'
import _ from 'lodash'
import { PlanningVM } from '../../viewModels/PlanningVM'

import "react-big-calendar/lib/Week" 
import "react-big-calendar/lib/TimeGrid"
import 'moment/locale/fr'
import { getAllCours } from '../../Controllers/cours'
import { Cours } from '../../Models/Cours'

const isMobile = document.documentElement.clientWidth < 600;

export const PlanningPage = () => {

    const [allPlanning, setAllPlanning] = useState<PlanningVM[]>([])
    const [allCours, setAllCours] = useState<Cours[]>([])

    const fetchAndSetPlanning = useCallback(async () => {
        let planningData = await getAllPlanning()
        const planningVMData = planningData.map(planning => PlanningVM.fromPlanning(planning))
        if(planningData.length) {
            setAllPlanning(planningVMData)
        }
    },[])

    const fetchAndSetCours = async () => {
        const allCours = await getAllCours()
        setAllCours(allCours)
    }

    const formats = {
        timeGutterFormat: 'HH:mm',
    }

    moment.locale('fr', {
        week: {
            dow: 1,
            doy: 1
        }
    })

    const localizer = momentLocalizer(moment)

    const today = new Date()

    const convertPlanningToEvents = () => {
        _.map(allPlanning, (planning) => {
            const associatedCours = _.find(allCours, ['id', planning.coursId])
            if(associatedCours) planning.setCoursVM = associatedCours
        })
        return _.map(allPlanning, (planning) => (planning.convertToEvent))
    }

    const getDefaultViewDepedingOnDevice = () => {
        return isMobile ? "day" : "week"
    }

    useEffect(() => {
        fetchAndSetPlanning()
        fetchAndSetCours()
      }, [])
    

  return (
      <>
      {
        allPlanning.length ? (
            <Calendar
            views={["week", "day"]}
            culture='fr'
            localizer={localizer}
            defaultDate={new Date()}
            defaultView={getDefaultViewDepedingOnDevice()}
            events={convertPlanningToEvents()}
            formats={formats}
            timeslots={1}
            step={60}
            style={{ height: "80vh", padding: '10px' }}
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


            onSelectEvent={() => console.log('You just clicked this course')}
        />
        ) : 'Loading...'
      }

      </>
  )
}
