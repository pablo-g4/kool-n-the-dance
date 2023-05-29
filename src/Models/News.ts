import { Database } from "./Database"

export class News extends Database {

    public title: string = ""
    public description: string = ""
    public attachedFileId: string = ""
    public imageFileId: string = ""


    constructor () {
        super()
    } 
    
    toDb():any {
        return {
            title: this.title,
            description: this.description,
            attached_file_id: this.attachedFileId, 
            image_file_id: this.imageFileId,
            is_active: this.isActive,
        }
    }

    static fromDb(objDb: any):News {

        const news = new News()

        news.id = objDb.id
        news.title = objDb.title
        news.description = objDb.description
        news.attachedFileId = objDb.attached_file_id
        news.imageFileId = objDb.image_file_id
        news.isActive = objDb.is_active
        news.updatedDate = objDb.updated_date
        news.creationDate = objDb.creation_date
        
        return news
    }
}