export class News {

    public title: string = ""
    public description: string = ""
    public attachedFile: string = ""
    public creationDate:number = 0
    public updatedDate: number = 0
    public updatedBy: string = ""
    public createdBy: string = ""
    public isActive: boolean = true

    constructor () {} 

    toDb():any {
        return {
            title: this.title,
            description: this.description,
            attached_file: this.attachedFile, 
            creation_date: this.creationDate,
            created_by: this.createdBy, 
            updated_by: this.updatedBy,
            is_active: this.isActive,
        }
    }

    static fromDb(objDb: any):News {

        const news = new News()

        news.title = objDb.title
        news.description = objDb.description
        news.attachedFile = objDb.attached_file
        news.creationDate = objDb.creation_date
        news.updatedBy = objDb.updated_by
        news.createdBy = objDb.created_by

        return news
    }
}