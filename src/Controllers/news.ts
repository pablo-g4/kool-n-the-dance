import { COLLECTION } from '../db/collection'
import { getAllDataFromCollection, addDocumentToCollection, updateDocumentToCollection, deleteDocumentFromCollection, listFiles } from '../db/dbHelper'
import { News } from '../Models/News'

export const createNews = async (news: News): Promise<string> => {    
    const createdNewsId = await addDocumentToCollection(COLLECTION.NEWS, news.toDb())
    return createdNewsId
}

export const updateNews = async (news: News): Promise<void> => {  
    await updateDocumentToCollection(COLLECTION.NEWS, news.id, news.toDb())
}

export const deleteNews = async (newsId: string): Promise<void> => {
    await deleteDocumentFromCollection(COLLECTION.NEWS, newsId)
}

export const getAllNews = async (): Promise<News[]> => {
    const allNews = await getAllDataFromCollection(COLLECTION.NEWS)
    return allNews.map((news: any) => {
        return News.fromDb(news)
    })
    
}


export const getAllFiles = async () => {
    await listFiles()
}