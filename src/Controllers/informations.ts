import _ from "lodash"
import { COLLECTION } from "../db/collection"
import { addDocumentToCollection, deleteDocumentFromCollection, getAllDataFromCollection, updateDocumentToCollection } from "../db/dbHelper"
import { GeneralInformations } from "../Models/GeneralInformations"

export const getAllGeneralInformations = async () => {
    const allInformations = await getAllDataFromCollection(COLLECTION.GENERAL_INFORMATIONS)
    return _.map(allInformations, information => GeneralInformations.fromDb(information))
}

export const createGeneralInformations = async (generalInformations: GeneralInformations) =>  await addDocumentToCollection(COLLECTION.GENERAL_INFORMATIONS, generalInformations.toDb())

export const updateGeneralInformations = async (generalInformations: GeneralInformations) => await updateDocumentToCollection(COLLECTION.GENERAL_INFORMATIONS,generalInformations.id, generalInformations.toDb())

export const deleteGeneralInformations = async (generalInformationsId: string) =>  await deleteDocumentFromCollection(COLLECTION.GENERAL_INFORMATIONS, generalInformationsId)