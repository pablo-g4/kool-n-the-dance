import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { doc, getDoc, getDocs, setDoc , addDoc} from "firebase/firestore";
import { db } from "./firebase";
import { errorResponse } from '../Utils/utils';
import { isLoggedIn } from "../Authentification/authentication"

export const getDataFromCollection = async (collectionName: string, dataId: string) => {

    const docRef = doc(db, collectionName, dataId);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) 
     return docSnap.data()
    else 
     return errorResponse('Error on data')

}

export const getAllDataFromCollection = async (collectionName: string) => {

    let allDataFromCollection: any = []
    const querySnapshot = await getDocs(collection(db, collectionName));

    querySnapshot.forEach((doc) => {
      allDataFromCollection.push(doc.data())
    });

    return allDataFromCollection

}

export const addDocumentToCollection = async (collectionName: string, dataToCollection: {}) => {
    
    const addedDocumentToCollection = collection(db, collectionName);    
    const newDocRef = await addDoc(addedDocumentToCollection, dataToCollection);
    return newDocRef.id
    
}

export const updateDocumentToCollection = async (collectionName: string, dataToCollection: {}) => {
    console.log(collectionName, dataToCollection)
}