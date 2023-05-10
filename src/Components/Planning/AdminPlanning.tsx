import React, { useState } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import AddOrEditPlanning from './AddOrEditPlanning'

moment.locale("fr-FR");
const localizer = momentLocalizer(moment);


const AdminPlanning = () => {
    const today = new Date()
    
    const [isAddOrEditPlanningOpen, setIsAddOrEditPlanningOpen] = useState<boolean>(false)
    const [currentStartDate, setCurrentStartDate] = useState<Date>()
    const [currentEndDate, setCurrentEndDate] = useState<Date>()
    const [eventsData, setEventsData] = useState<any>([])

    const handleSelect = ({ start, end } : { start: Date, end: Date }) => {
        setCurrentStartDate(start)
        setCurrentEndDate(end)
        setIsAddOrEditPlanningOpen(true)
    }

    const setDates = (form: any) => {
                
        setEventsData([
            ...eventsData,
            {
                start: currentStartDate,
                end: currentEndDate,
                title : form.title
            }
        ])




        setCurrentStartDate(undefined)
        setCurrentEndDate(undefined)

        setIsAddOrEditPlanningOpen(false)

    }


    return (
        <>
            <AddOrEditPlanning isOpen={isAddOrEditPlanningOpen}  setIsOpen={() => setIsAddOrEditPlanningOpen(true)} submitPlanning={setDates}/>
            <Calendar
                views={["day", "agenda", "week", "month"]}
                selectable
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="week"
                events={eventsData}
                style={{ height: "100vh" }}
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
                      17
                    )
                  }
                onSelectEvent={(event) => alert(event.title)}
                onSelectSlot={handleSelect}
            />
        </>
    )
}

export default AdminPlanning