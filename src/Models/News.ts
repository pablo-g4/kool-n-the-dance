export class News {

    public title: string = ""
    public description: string = ""
    public link: string = ""
    public creationDate:number = 0
    public updatedBy: string = ""
    public createdBy: string = ""
    public isActive: boolean = true

    constructor () {} 

    static toDb(news: News):any {
        return {
            title: news.title,
            description: news.description,
            link: news.link, 
            creation_date: news.creationDate,
            created_by: news.createdBy, 
            updated_by: news.updatedBy,
            is_active: news.isActive,
        }
    }

    fromDb(objDb: any):News {

        const news = new News()

        this.title = objDb.title
        this.description = objDb.description
        this.link = objDb.link
        this.creationDate = objDb.creation_date
        this.updatedBy = objDb.updated_by
        this.createdBy = objDb.created_by

        return news
    }
}