import React, { useState, useCallback, useEffect } from 'react'
import { Calendar, momentLocalizer, dayjsLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Planning } from '../../Models/Planning'
import { getAllPlanning } from '../../Controllers/planning'
import _ from 'lodash'

import "react-big-calendar/lib/Week" 
import "react-big-calendar/lib/TimeGrid"
import 'moment/locale/fr'

const PlanningPage = () => {

    const [allPlanning, setAllPlanning] = useState<Planning[]>([])

    const fetchPlanning = useCallback(async () => {
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
        allPlanning.length ? (
            <Calendar
            views={["week"]}
            culture='fr'
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="week"
            events={convertPlanningToEvents()}
            formats={formats}
            timeslots={1}
            step={60}
            style={{ height: "80vh", padding: '4px' }}
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


            onSelectEvent={() => console.log('You just clicked this course')}
        />
        ) : 'Loading...'
      }

      </>
  )
}

export default PlanningPage