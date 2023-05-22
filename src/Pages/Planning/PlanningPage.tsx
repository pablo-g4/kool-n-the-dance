import React, { useState, useCallback, useEffect, useContext } from 'react'
import { Calendar, momentLocalizer, dayjsLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Planning } from '../../Models/Planning'
import { getAllPlanning } from '../../Controllers/planning'
import _ from 'lodash'

import "react-big-calendar/lib/Week" 
import "react-big-calendar/lib/TimeGrid"
import 'moment/locale/fr'
const isMobile = document.documentElement.clientWidth < 600;

export const PlanningPage = () => {

    const [allPlanning, setAllPlanning] = useState<Planning[]>([])

    const fetchAndSetPlanning = useCallback(async () => {
        const planning = await getAllPlanning()
        if(planning.length) {
            setAllPlanning(planning)
        }
    },[])

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
        return _.map(allPlanning, (planning) => ({
            id: planning.id,
            start: new Date(planning.startDate),
            end: new Date(planning.endDate)
        }))
    }

    const getDefaultViewDepedingOnDevice = () => {
        return isMobile ? "day" : "week"
    }

    useEffect(() => {
        fetchAndSetPlanning()
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
                    21
                )
            }


            onSelectEvent={() => console.log('You just clicked this course')}
        />
        ) : 'Loading...'
      }

      </>
  )
}
