import _ from "lodash"
import { COLLECTION } from "../db/collection"
import { addDocumentToCollection, deleteDocumentFromCollection, getAllDataFromCollection, getAllDataFromCollectionEvenDisable, updateDocumentToCollection } from "../db/dbHelper"
import { Temoignages } from "../Models/Temoignages"


export const getAllTemoignages = async (): Promise<Temoignages[]> => {
    const allTemoignages = await getAllDataFromCollection(COLLECTION.TEMOIGNAGES)
    return _.map(allTemoignages, temoignage => Temoignages.fromDb(temoignage))
}

export const getAllTemoignagesEvenDisabled = async (): Promise<Temoignages[]> => {
    const allTemoignages = await getAllDataFromCollectionEvenDisable(COLLECTION.TEMOIGNAGES)
    return _.map(allTemoignages, temoignage => Temoignages.fromDb(temoignage)) 
}

export const createTemoignagne = async (temoignage: Temoignages ): Promise<string> => await addDocumentToCollection(COLLECTION.TEMOIGNAGES,temoignage.toDb())

export const updateTemoignage = async (temoignage: Temoignages ): Promise<void> => await updateDocumentToCollection(COLLECTION.TEMOIGNAGES,temoignage.id,temoignage.toDb())

export const deleteTemoignage = async (temoignageId: string ): Promise<void> => await deleteDocumentFromCollection(COLLECTION.TEMOIGNAGES, temoignageId)
