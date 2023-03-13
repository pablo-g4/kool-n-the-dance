import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { doc, getDoc, getDocs, setDoc , updateDoc , addDoc, deleteDoc} from "firebase/firestore";
import { db } from "./firebase";
import { errorResponse } from '../Utils/utils';
import { COLLECTION } from "./collection";

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