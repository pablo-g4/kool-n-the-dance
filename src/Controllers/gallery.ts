import { getAllDataFromCollection, addDocumentToCollection, updateDocumentToCollection, deleteDocumentFromCollection, listFiles, getAllDataFromCollectionEvenDisable } from '../db/dbHelper'
import { createFile } from './files'

export const getAllGalleryImages = async () => {
    const listFilesFromGallery =  await listFiles('images')
    console.log('--->',listFilesFromGallery)
    return listFilesFromGallery
}

// export const addImageToGallery = async():Promise<string> => {

// }