import { Database } from "./Database"

export enum COURSES_TYPE {
    ZUMBA = 'Zumba',
    KUDURO_FIT = 'Kuduro Fit',
    STRONG_NATION = 'Strong Nation',
    HIIT = 'Hiit',
    PORT_DE_BRAS = 'Port de bras',
    RENFORCEMENT = 'Renforcement'
}


export class Forfait extends Database {
    
    public title: string = ""
    public description: string[] = []
    public isBasic: boolean = true
    public price: number = 0
    public customerType: string = ''
    public category: string = ''
    public imageUrl: string = ''
    public associatedCourses: COURSES_TYPE[] = []

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
            image_url: this.imageUrl,
            associated_courses: this.associatedCourses,
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
        forfait.price = objDb.price ?? 0
        forfait.customerType = objDb.customer_type
        forfait.category = objDb.category
        forfait.imageUrl = objDb.image_url
        forfait.associatedCourses = objDb.associated_courses
        
        return forfait
    }
}