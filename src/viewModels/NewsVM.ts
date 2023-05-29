import { Files } from "../Models/Files"
import { News } from "../Models/News"
import { utils } from "../Utils/utils"

export class NewsVM extends News {

    public attachedFile: Files = new Files()
    public imageFile: Files = new Files()

    constructor(){
        super()
    }

    static fromNews(news: News):NewsVM {
        let newsVM = new NewsVM()
        newsVM.id = news.id
        newsVM.creationDate = news.creationDate
        newsVM.description = news.description
        newsVM.imageFileId = news.imageFileId
        newsVM.attachedFileId = news.attachedFileId
        newsVM.isActive = news.isActive
        newsVM.title = news.title
        newsVM.updatedDate = news.updatedDate
        return newsVM
    }

    toNews(): News {
        let news = new NewsVM()
        news.id = this.id
        news.creationDate = this.creationDate
        news.description = this.description
        news.imageFileId = this.imageFileId
        news.attachedFileId = this.attachedFileId
        news.isActive = this.isActive
        news.title = this.title
        news.updatedDate = this.updatedDate
        return news
    }

    get displayableCreationDate(){
        return utils.formatDateDDMMYY(this.creationDate * 1000)
    }

}