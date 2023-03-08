import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { errorResponse } from '../Utils/utils';
import { isLoggedIn } from "../Authentification/authentication"

export const getDataFromCollection = async (collectionName: string, dataId: string) => {

    console.log(await isLoggedIn())

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

    const addedDocumentToCollection = doc(db, collectionName);
    const newDoc = await setDoc(addedDocumentToCollection, dataToCollection);


}