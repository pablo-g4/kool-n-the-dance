import { COURSES_TYPE } from "./Forfait"

export enum RECURENCE_TYPES {
    ALL_WEEKS = 'all_weeks',
    ONCE = 'once'
}

export class Planning {

    public id: string = ""
    public startDate: number = 0
    public endDate: number = 0
    public start?: Date 
    public end?: Date 
    public title: string = ""
    public recurrence: RECURENCE_TYPES = RECURENCE_TYPES.ONCE
    public associatedCourses: COURSES_TYPE[] = []
    public isActive: boolean = true

    toDb():any {
        return {
            start_date: this.startDate,
            end_date: this.endDate,
            title: this.title,
            recurrence: this.recurrence,
            is_active: this.isActive,
            associated_courses: this.associatedCourses
        }
    }

    static fromDb(objDb: any): Planning {
        const planning = new Planning

        planning.id = objDb.id 
        planning.startDate = objDb.start_date
        planning.endDate = objDb.end_date
        planning.title = objDb.title
        planning.isActive = objDb.is_active
        planning.recurrence = objDb.recurrence
        planning.associatedCourses = objDb.associated_courses
        
        return planning
    }
    
    static toEvent(planning: Planning) {

    }
}