import { COLLECTION } from "../db/collection"
import { getAllDataFromCollection, addDocumentToCollection, updateDocumentToCollection, deleteDocumentFromCollection, listFiles } from '../db/dbHelper'
import { Forfait } from '../Models/Forfait'

export const createForfait = async (forfait: Forfait) => {
    const createForfaitId = await addDocumentToCollection(COLLECTION.FORFAITS, forfait.toDb())
    return createForfaitId
}

export const updateForfait = async (forfait: Forfait) => {
    await updateDocumentToCollection(COLLECTION.FORFAITS, forfait.id, forfait.toDb())
}

export const deleteForfait = async (forfaitId: string) => {
    await deleteDocumentFromCollection(COLLECTION.FORFAITS, forfaitId)
}

export const getAllForfaits = async (): Promise<Forfait[]> => {
    const allForfaits = await getAllDataFromCollection(COLLECTION.FORFAITS)
    return allForfaits.map((forfait: any) => {
        return Forfait.fromDb(forfait)
    })
}