import { uploadFileToStorage } from '../db/dbHelper'

export const uploadFile = async (file: any, folderName: string) => {
    const uploadedFilePath = await uploadFileToStorage(file, folderName)
    return uploadedFilePath
}