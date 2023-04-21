export class Forfait {
    
    public id: string = ""
    public title: string = ""
    public description: string = ""
    public isBasic: boolean = true
    public price: number = 0
    public customerType: string = ''
    public category: string = ''
    public imageUrl: string = ''
    public associatedCourses: string[] = []
    public creationDate:number = Math.round(+new Date()/1000)
    public updatedDate: number = Math.round(+new Date()/1000)
    public updatedBy: string = ""
    public createdBy: string = ""
    public isActive: boolean = true

    constructor () {} 

    toDb(): any {
        return {
            title: this.title,
            description: this.description,
            is_basic: this.isBasic,
            created_by: this.createdBy, 
            updated_by: this.updatedBy,
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
        forfait.creationDate = objDb.creation_date
        forfait.isActive = objDb.is_active
        
        return forfait
    }
}