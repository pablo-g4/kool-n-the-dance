import { COLLECTION } from '../db/collection';
import { getAllDataFromCollection, addDocumentToCollection } from '../db/dbHelper'
import { News } from '../Models/News';

export const createNews = async (news: News) => {    
    const createdNewsId = await addDocumentToCollection(COLLECTION.NEWS, news.toDb())
    return createdNewsId
}

export const getAllNews = async ():Promise<News[]> => {

    const allNews = await getAllDataFromCollection(COLLECTION.NEWS)
    console.log('allNews', allNews);
    
    return allNews.map((news: any) => {
        return News.fromDb(news)
    })
    
}