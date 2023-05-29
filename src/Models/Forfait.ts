import { Database } from "./Database"

export class Forfait extends Database {
    
    public title: string = ""
    public description: string[] = []
    public isBasic: boolean = true
    public price: number = 0
    public customerType: string = ''
    public category: string = ''
    public associatedCoursesId: string[] = []
    public imageFileId: string = ""

    constructor () {
        super()
    } 

    toDb(): any {
        return {
            title: this.title,
            description: this.description,
            is_basic: this.isBasic,
            price: this.price,
            customer_type: this.customerType,
            category: this.category,
            image_file_id: this.imageFileId,
            associated_courses_id: this.associatedCoursesId,
            is_active: this.isActive,
        }
    }

    static fromDb(objDb: any): Forfait {
        const forfait = new Forfait()

        forfait.id = objDb.id 
        forfait.title = objDb.title
        forfait.description = objDb.description
        forfait.isBasic = objDb.is_basic 
        forfait.creationDate = objDb.creation_date
        forfait.updatedDate = objDb.updated_date
        forfait.isActive = objDb.is_active
        forfait.price = objDb.price
        forfait.customerType = objDb.customer_type
        forfait.category = objDb.category
        forfait.imageFileId = objDb.image_file_id
        forfait.associatedCoursesId = objDb.associated_courses_id
        
        return forfait
    }
}