import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { doc, getDoc, getDocs, setDoc , updateDoc , addDoc, deleteDoc} from "firebase/firestore";
import { db, storage } from "./firebase";
import { errorResponse } from '../Utils/utils';
import { COLLECTION } from "./collection";
import { getStorage, ref, listAll, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { log } from "console";

export const getDataFromCollection = async (collectionName: string, dataId: string) => {
    const docRef = doc(db, collectionName, dataId);
    const docSnap = await getDoc(docRef);
    
    if(!docSnap.exists()) 
        return errorResponse('Error on data')
    return { ...docSnap.data(), id: docSnap.id } 
}

export const getAllDataFromCollection = async (collectionName: string) => {
    let allDataFromCollection: any = []
    const querySnapshot = await getDocs(collection(db, collectionName));
    
    querySnapshot.forEach((doc) => {
      allDataFromCollection.push({ ...doc.data(), id: doc.id })
    });

    return allDataFromCollection

}

export const addDocumentToCollection = async (collectionName: string, dataToCollection: any): Promise<string> => {
    dataToCollection.creation_date = Math.round(+new Date()/1000);
    dataToCollection.updated_date = Math.round(+new Date()/1000);

    const addedDocumentToCollection = collection(db, collectionName);    
    const newDocRef = await addDoc(addedDocumentToCollection, dataToCollection);
    return newDocRef.id
    
}

export const updateDocumentToCollection = async (collectionName: string, dataToUpdateId: string, dataToUpdate: any) => {

    dataToUpdate.updated_date = Math.round(+new Date()/1000);    
    const docRefToUpdate = doc(db, collectionName, dataToUpdateId)
    await updateDoc(docRefToUpdate, dataToUpdate)

}

export const deleteDocumentFromCollection = async (collectionName: COLLECTION, dataToDeleteId: string): Promise<void> => {
    
    const docRefToDelete = doc(db, collectionName, dataToDeleteId)
    await deleteDoc(docRefToDelete)

}

export const listFiles = async (foldername: string) => {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storageRef = getStorage();
    // Create a storage reference from our storage service
    const listRef = ref(storageRef, foldername);

    let imagesUrl: any[] = []

    const listAllFilesFromFolder = await listAll(listRef)

    await Promise.all(listAllFilesFromFolder.items.map(async (itemRef) => {
        let imageUrl = await getDownloadURL(itemRef)
        imagesUrl.push(imageUrl)
    }))
    return imagesUrl
}

export const uploadFileToStorage = async (file: any, folderName: string) => {
    
    if (!file) {
        return
    } 
    const storageRef = ref(storage, `/${folderName}/${file.name}`);
    await uploadBytesResumable(storageRef, file);
    return await getDownloadURL(storageRef)
}