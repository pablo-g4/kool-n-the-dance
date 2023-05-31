import _ from 'lodash'
import { addDocumentToCollection, getDataFromCollection, deleteDocumentFromCollection, getAllDataFromCollection, updateDocumentToCollection, uploadFileToStorage, getAllDataFromCollectionEvenDisable, getAllDataFromCollectionWithIds } from '../db/dbHelper'
import { COLLECTION } from '../db/collection'
import { Files } from '../Models/Files'
import { deleteFileFromStorage } from '../db/dbHelper'

export const createFile = async (file: any, folderName: COLLECTION): Promise<string> => {
    let newFile = new Files()
    newFile.associatedCollection = folderName

    Object.defineProperty(file, 'name', {
        writable: true,
        value: `${Date.now().toString(36) + '-' +file.name}`
    })
    
    newFile.fileName = file.name
    newFile.fileUrl = await uploadFile(file, folderName)

    return await addDocumentToCollection(COLLECTION.FILES, newFile.toDb())
}

export const updateFile = async (file: Files): Promise<void> => await updateDocumentToCollection(COLLECTION.FILES, file.id, file.toDb())


export const deleteFile = async (fileId: string): Promise<void> => { 
    const file = await getDataFromCollection(COLLECTION.FILES, fileId)
    const deletedFile = Files.fromDb(file)
    await deleteFileFromStorage(deletedFile.associatedCollection, deletedFile.fileName)
    await deleteDocumentFromCollection(COLLECTION.FILES, fileId)
}


export const uploadFile = async (file: any, folderName: string): Promise<string> => await uploadFileToStorage(file, folderName)

export const getAllFiles = async (): Promise<Files[]> => {
    const allFiles = await getAllDataFromCollection(COLLECTION.FILES)
    return _.map(allFiles, file =>  Files.fromDb(file))
}

export const getFileWithId = async (fileId: string): Promise<Files> => {
    let file = await getDataFromCollection(COLLECTION.FILES, fileId)
    return Files.fromDb(file)
}

export const getAllFilesWithListOfIds = async (folderName: COLLECTION, arrayFilesId: string[]): Promise<Files[]> => {
    const allFiles = await getAllDataFromCollectionWithIds(folderName, arrayFilesId)
    return _.map(allFiles, file => Files.fromDb(file))
}

export const getAllFilesEvenDisabled = async (): Promise<Files[]> => {
    const allFiles = await getAllDataFromCollectionEvenDisable(COLLECTION.FILES)
    return _.map(allFiles, file =>  Files.fromDb(file))
}

export const getAllFilesFromFolder = async (folderName: COLLECTION) => {
    const allFilesFromCollection = await getAllDataFromCollection(COLLECTION.FILES)
    return _.filter(allFilesFromCollection, ['associatedCollection', folderName])
}