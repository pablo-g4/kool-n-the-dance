import { getAllDataFromCollection, addDocumentToCollection, updateDocumentToCollection, deleteDocumentFromCollection, listFiles, getAllDataFromCollectionEvenDisable } from '../db/dbHelper'

export const getAllGalleryImages = async () => {
    const listFilesFromGallery =  await listFiles('images')
    console.log('--->',listFilesFromGallery)
    return listFilesFromGallery
}