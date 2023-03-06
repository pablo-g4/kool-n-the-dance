import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { errorResponse } from '../Utils/utils'

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
      doc.data()
      allDataFromCollection.push(doc.data())
    });

    return allDataFromCollection

}