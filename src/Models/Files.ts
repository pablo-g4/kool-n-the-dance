export class Files {
    public id: string = ""
    public fileUrl: string = ""
    public isActive: boolean = true
    public creationDate:number = 0
    public updatedDate: number = 0

    constructor () {} 
    
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