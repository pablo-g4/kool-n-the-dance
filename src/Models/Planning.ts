import { Database } from "./Database"

export enum RECURENCE_TYPES {
    ALL_WEEKS_DURING_ONE_YEAR = 'all_weeks_during_one_year',
    ONCE = 'once'
}

export class Planning extends Database {

    public coursId: string = ""
    public startDate: number = 0
    public endDate: number = 0
    public recurrence: RECURENCE_TYPES = RECURENCE_TYPES.ONCE

    toDb():any {
        return {
            start_date: this.startDate,
            end_date: this.endDate,
            recurrence: this.recurrence,
            is_active: this.isActive,
            cours_id: this.coursId
        }
    }

    static fromDb(objDb: any): Planning {
        const planning = new Planning

        planning.id = objDb.id 
        planning.startDate = objDb.start_date
        planning.endDate = objDb.end_date
        planning.isActive = objDb.is_active
        planning.recurrence = objDb.recurrence
        planning.coursId = objDb.cours_id
        
        return planning
    }
    
}