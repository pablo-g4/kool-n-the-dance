import _ from "lodash"
import { Database } from "./Database"

export enum COURSES_TYPES {
    DANSES = 'danses',
    FITNESS = 'fitness',
}


export class Cours extends Database {
    

    public title: string = ""
    public description: string = ""
    public imageFileId: string = ""
    public courseType: COURSES_TYPES = COURSES_TYPES.DANSES


    toDb():any {
        return {
            title: this.title,
            description: this.description,
            image_file_id : this.imageFileId,
            creation_date: this.creationDate,
            updated_date: this.updatedDate,
            course_type: this.courseType,
            is_active: this.isActive
        }
    }

    static fromDb(objDb: any): Cours {
        let cours = new Cours()
        cours.id = objDb.id 
        cours.title = objDb.title
        cours.description = objDb.description
        cours.imageFileId = objDb.image_file_id
        cours.creationDate = objDb.creation_date
        cours.updatedDate = objDb.updated_date
        cours.courseType = objDb.course_type
        cours.isActive = objDb.is_active
        return cours
    }
}