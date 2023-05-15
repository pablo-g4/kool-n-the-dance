import _ from "lodash"

export enum COURSES_TYPES {
    DANSES = 'danses',
    FITNESS = 'fitness',
}


export class Cours {
    
    public id: string = ""
    public title: string = ""
    public description: string = ""
    public imageUrl: string = ""
    public creationDate:number = 0
    public updatedDate: number = 0
    public courseType: COURSES_TYPES = COURSES_TYPES.DANSES
    public isActive: boolean = true

    toDb():any {
        return {
            title: this.title,
            description: this.description,
            image_url : this.imageUrl,
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
        cours.imageUrl = objDb.image_url
        cours.creationDate = objDb.creation_date
        cours.updatedDate = objDb.updated_date
        cours.courseType = objDb.course_type
        cours.isActive = objDb.is_active
        return cours
    }
}