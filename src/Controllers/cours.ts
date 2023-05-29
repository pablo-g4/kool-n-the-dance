import { Cours } from "../Models/Cours"
import { getAllDataFromCollection, addDocumentToCollection, deleteDocumentFromCollection, updateDocumentToCollection, getAllDataFromCollectionEvenDisable, getAllDataFromCollectionWithWhereArray } from "../db/dbHelper"
import { COLLECTION } from "../db/collection"
import _ from "lodash"

export const getAllCours = async (): Promise<Cours[]> => {
    let allCours = await getAllDataFromCollection(COLLECTION.COURS)
    return _.map(allCours, cours => Cours.fromDb(cours) )
}


export const getAllCoursEvenDisabled = async (): Promise<Cours[]> => {
    let allCours = await getAllDataFromCollectionEvenDisable(COLLECTION.COURS)
    return _.map(allCours, cours => Cours.fromDb(cours) )
}

export const createCours = async (cours: Cours): Promise<string> => await addDocumentToCollection(COLLECTION.COURS, cours.toDb())

export const deleteCours = async (coursId: string): Promise<void> => await deleteDocumentFromCollection(COLLECTION.COURS, coursId)

export const updateCours = async (cours: Cours): Promise<void> => await updateDocumentToCollection(COLLECTION.COURS, cours.id, cours.toDb())