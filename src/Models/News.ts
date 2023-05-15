export class News {
    public id: string = ""
    public title: string = ""
    public description: string = ""
    public attachedFileUrl: string = ""
    public imageUrl: string = ""
    public creationDate:number = Math.round(+new Date()/1000);
    public updatedDate: number = Math.round(+new Date()/1000);
    public isActive: boolean = true

    constructor () {} 
    
    toDb():any {
        return {
            title: this.title,
            description: this.description,
            attached_file_url: this.attachedFileUrl || "", 
            image_url: this.imageUrl || "",
            is_active: this.isActive,
        }
    }

    static fromDb(objDb: any):News {

        const news = new News()

        news.id = objDb.id
        news.title = objDb.title
        news.description = objDb.description
        news.attachedFileUrl = objDb.attached_file_url
        news.imageUrl = objDb.image_url
        news.isActive = objDb.is_active
        news.updatedDate = objDb.updated_date
        news.creationDate = objDb.creation_date
        
        return news
    }
}