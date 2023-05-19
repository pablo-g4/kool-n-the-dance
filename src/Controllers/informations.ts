import _ from "lodash"
import { COLLECTION } from "../db/collection"
import { addDocumentToCollection, deleteDocumentFromCollection, getAllDataFromCollection, updateDocumentToCollection } from "../db/dbHelper"
import { Informations } from "../Models/Informations"

export const getAllInformations = async () => {
    const allInformations = await getAllDataFromCollection(COLLECTION.INFORMATIONS)
    return _.map(allInformations, information => Informations.fromDb(information))
}

export const createInformations = async (information: Informations) => {
    const informationId = await addDocumentToCollection(COLLECTION.INFORMATIONS, information.toDb())
    return informationId
}

export const updateInformation = async (information: Informations) => {
    return await updateDocumentToCollection(COLLECTION.INFORMATIONS,information.id, information.toDb())
}

export const deleteInformation = async (informationId: string) => {
    return await deleteDocumentFromCollection(COLLECTION.INFORMATIONS, informationId)
}