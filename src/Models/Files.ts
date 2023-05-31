import { COLLECTION } from "../db/collection"
import { Database } from "./Database"

export class Files extends Database {

    public id: string = ""
    public fileUrl: string = ""
    public associatedCollection: COLLECTION = COLLECTION.FILES
    public fileName: string = ""
    public fileType?: string = ""

    constructor () {
        super()
    } 
    
    toDb():any {
        
        let objToDb: any = {
            file_url: this.fileUrl,
            is_active: this.isActive,
            associated_collection: this.associatedCollection,
            filename: this.fileName
        }

        if(this.fileType) objToDb.file_type = this.fileType

        return objToDb
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

        if(objDb.file_type) files.fileType = objDb.file_type
        
        return files
    }

    
}