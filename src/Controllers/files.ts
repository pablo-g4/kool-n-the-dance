import { addDocumentToCollection, deleteDocumentFromCollection, getAllDataFromCollection, updateDocumentToCollection, uploadFileToStorage, getAllDataFromCollectionEvenDisable } from '../db/dbHelper'
import { COLLECTION } from '../db/collection'
import { Files } from '../Models/Files'

export const createFile = async (files: any, folderName: string) => {
    const uploadedFileUrl = await uploadFile(files, folderName)
    let newFile = new Files();
    if (uploadedFileUrl) {
        newFile.fileUrl = uploadedFileUrl;
    }
    const createdNewsId = await addDocumentToCollection(COLLECTION.FILES, newFile.toDb())
    return newFile
}

export const updateFile = async (files: any): Promise<void> => {  
    await updateDocumentToCollection(COLLECTION.FILES, files.id, files.toDb())
}

export const deleteFile = async (filesId: string): Promise<void> => {
    await deleteDocumentFromCollection(COLLECTION.FILES, filesId)
}

export const uploadFile = async (file: any, folderName: string) => {
    const uploadedFilePath = await uploadFileToStorage(file, folderName)
    return uploadedFilePath   
}

export const getAllFiles = async (): Promise<Files[]> => {
    const allFiles = await getAllDataFromCollection(COLLECTION.FILES)
    return allFiles.map((files: any) => {
        return Files.fromDb(files)
    })
    
}

export const getAllFilesEvenDisabled = async (): Promise<Files[]> => {
    const allFiles = await getAllDataFromCollectionEvenDisable(COLLECTION.FILES)
    return allFiles.map((files: any) => {
        return Files.fromDb(files)
    })
}
