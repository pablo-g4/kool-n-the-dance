export class Files {
    public id: string = ""
    public fileUrl: string = ""
    public isActive: boolean = true
    public creationDate:number = Math.round(+new Date()/1000);
    public updatedDate: number = Math.round(+new Date()/1000);
    public updatedBy: string = ""
    public createdBy: string = ""

    constructor () {} 
    
    toDb():any {
        return {
            file_url: this.fileUrl,
            is_active: this.isActive || true, 
            creation_date: this.creationDate || "",
            updated_date: this.updatedDate || "",
            updated_by: this.updatedBy || "",
            created_by: this.createdBy || "",
        }
    }

    static fromDb(objDb: any):Files {

        const files = new Files()

        files.id = objDb.id
        files.fileUrl = objDb.file_url
        files.isActive = objDb.is_active
        files.creationDate = objDb.created_by
        files.updatedDate = objDb.updated_date
        files.updatedBy = objDb.updated_by
        files.createdBy = objDb.created_by
        
        return files
    }

    
}