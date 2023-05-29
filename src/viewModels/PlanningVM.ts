import { Cours } from "../Models/Cours"
import { Planning } from "../Models/Planning"
import { utils } from "../Utils/utils"
import { CoursVM } from "./CoursVM"

export class PlanningVM extends Planning {

    public coursVM: CoursVM = new CoursVM()
    public start: Date = new Date()
    public end: Date = new Date()

    constructor(){ super() }

    static fromPlanning(planning: Planning): PlanningVM{
        let newPlanningVM = new PlanningVM()
        newPlanningVM.id = planning.id 
        newPlanningVM.coursId = planning.coursId 
        newPlanningVM.coursVM.id = planning.coursId 
        newPlanningVM.isActive = planning.isActive
        newPlanningVM.coursId = planning.coursId
        newPlanningVM.startDate = planning.startDate
        newPlanningVM.endDate = planning.endDate
        newPlanningVM.start = new Date(planning.startDate)
        newPlanningVM.end = new Date(planning.endDate)
        newPlanningVM.updatedDate = planning.updatedDate
        newPlanningVM.creationDate = planning.creationDate
        newPlanningVM.recurrence = planning.recurrence
        
        return newPlanningVM
    }

    toPlanning(): Planning {

        let planning = new Planning()

        planning.id = this.id
        planning.creationDate = this.creationDate
        planning.updatedDate = this.updatedDate
        planning.coursId = this.coursId
        planning.startDate = this.startDate 
        planning.endDate = this.endDate
        planning.recurrence = this.recurrence
        planning.isActive = this.isActive
        
        return planning
    }


    getPlanningStartDate() {
        return utils.formatDateDDMMYY(this.startDate)
    }

    getPlanningEndDate() {
        return utils.formatDateDDMMYY(this.endDate)
    }

    set setCoursVM(cours: Cours) {
        this.coursVM =  CoursVM.fromCours(cours)
    }

    set setStart(startDate: Date) {
        this.start = new Date(startDate)
    }

    set setEnd(endDate: Date) {
        this.end = new Date(endDate)
    }

    get formattedEndHour() {
        return this.end.toTimeString().split(' ')[0]
    }

    get startAndEndHourAsString() {
        return `${this.start.getHours()}h` + '-' + `${this.end.getHours()}h`
    }

    get convertToEvent() {
        return {
            end: this.end,
            id: this.id,
            start: this.start,
            title: this.coursVM.title
        }
    }
}