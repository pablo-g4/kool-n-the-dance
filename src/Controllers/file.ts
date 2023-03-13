import { getStorage, ref, listAll, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { uploadFileToStorage } from '../db/dbHelper'

export const uploadFile = async (file: any) => {

    const uploadedFilePath = await uploadFileToStorage(file)
    return uploadedFilePath
    
}