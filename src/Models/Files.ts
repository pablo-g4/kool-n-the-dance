import { COLLECTION } from "../db/collection"
import { Database } from "./Database"

export class Files extends Database {

    public id: string = ""
    public fileUrl: string = ""
    public associatedCollection: COLLECTION = COLLECTION.FILES
    public fileName: string = ""

    constructor () {
        super()
    } 
    
    toDb():any {
        return {
            file_url: this.fileUrl,
            is_active: this.isActive,
            associated_collection: this.associatedCollection,
            filename: this.fileName
        }
    }

    static fromDb(objDb: any):Files {

        const files = new Files()

        files.id = objDb.id
        files.fileUrl = objDb.file_url
        files.isActive = objDb.is_active
        files.creationDate = objDb.creation_date
        files.associatedCollection = objDb.associated_collection
        files.updatedDate = objDb.updated_date
        files.fileName = objDb.filename
        
        return files
    }

    
}