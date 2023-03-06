import { getAllDataFromCollection } from '../db/dbHelper'
import { COLLECTION } from '../db/collection'

export const getAllPosts = async () => {
    const posts = await getAllDataFromCollection(COLLECTION.POSTS)
    return posts
}