import { Database } from "./Database"

export class Files extends Database {

    public fileUrl: string = ""

    constructor () {
        super()
    } 
    
    toDb():any {
        return {
            file_url: this.fileUrl,
            is_active: this.isActive || true,
        }
    }

    static fromDb(objDb: any):Files {

        const files = new Files()

        files.id = objDb.id
        files.fileUrl = objDb.file_url
        files.isActive = objDb.is_active
        files.creationDate = objDb.created_by
        files.updatedDate = objDb.updated_date
        
        return files
    }

    
}