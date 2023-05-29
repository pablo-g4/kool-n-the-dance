import {collection, query, orderBy, onSnapshot, where } from "firebase/firestore"
import { doc, getDoc, getDocs, setDoc , updateDoc , addDoc, deleteDoc} from "firebase/firestore"
import { db, storage } from "./firebase"
import { utils } from '../Utils/utils'
import { COLLECTION } from "./collection"
import { getStorage, ref, listAll, uploadBytesResumable, getDownloadURL, deleteObject  } from "firebase/storage"
import _ from "lodash"

export const getDataFromCollection = async (collectionName: COLLECTION, dataId: string) => {
    const docRef = doc(db, collectionName, dataId);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id }
}

export const getAllDataFromCollectionWithIds = async (collectionName: COLLECTION, listOfIds: string[]) => {

    let listOfData: any = []

    await Promise.all([
        listOfIds.forEach(async (id) => {
            const data = await getDataFromCollection(collectionName, id)
            listOfData.push(data)
        })]
    )

    return listOfData
}

export const getAllDataFromCollectionWithWhereArray = async (collectionName: COLLECTION, whereArray: any) => {

    let arrayData: any = []

    const q = query(collection(db,collectionName), where(whereArray.property, '==', whereArray.propertyValue))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        arrayData.push({...doc.data(), id: doc.id})
    })

    console.log('arrayData -->', arrayData)

    return arrayData
}

export const getAllDataFromCollection = async (collectionName: COLLECTION) => {
    let allDataFromCollection: any = []
    const querySnapshot = await getDocs(collection(db, collectionName));
    
    querySnapshot.forEach((doc) => {
      allDataFromCollection.push({ ...doc.data(), id: doc.id })
    });

    return _.filter(allDataFromCollection, 'is_active')
}

export const getAllDataFromCollectionEvenDisable = async (collectionName: COLLECTION) => {
    let allDataFromCollection: any = []
    const querySnapshot = await getDocs(collection(db, collectionName))
    
    querySnapshot.forEach((doc) => {
      allDataFromCollection.push({ ...doc.data(), id: doc.id })
    });

    return allDataFromCollection
}

export const addDocumentToCollection = async (collectionName: COLLECTION, dataToCollection: any): Promise<string> => {
    dataToCollection.creation_date = Math.round(+new Date()/1000)
    dataToCollection.updated_date = Math.round(+new Date()/1000)

    const addedDocumentToCollection = collection(db, collectionName);    
    const newDocRef = await addDoc(addedDocumentToCollection, dataToCollection);
    return newDocRef.id
    
}

export const updateDocumentToCollection = async (collectionName: string, dataToUpdateId: string, dataToUpdate: any) => {
    dataToUpdate.updated_date = Math.round(+new Date()/1000)  

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

export const uploadFileToStorage = async (file: any, folderName: string): Promise<string> => {
    const storageRef = ref(storage, `/${folderName}/${file.name}`)
    await uploadBytesResumable(storageRef, file)
    return await getDownloadURL(storageRef)
}

export const deleteFileFromStorage = async (folderName: string, fileName: string): Promise<void> => {
    const storageRef = ref(storage, `/${folderName}/${fileName}`)
    return await deleteObject(storageRef)
} 