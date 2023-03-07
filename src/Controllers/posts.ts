import { getAllDataFromCollection, addDocumentToCollection } from '../db/dbHelper'
import { COLLECTION } from '../db/collection'

export const getAllPosts = async () => {
    const posts = await getAllDataFromCollection(COLLECTION.POSTS)
    return posts
}

export const createPost = async (post: {}) => {    
    const addPost = await addDocumentToCollection(COLLECTION.POSTS, post)
}