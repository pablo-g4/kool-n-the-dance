import { Planning } from "../Models/Planning"
import { getAllDataFromCollection, addDocumentToCollection, updateDocumentToCollection, deleteDocumentFromCollection, getAllDataFromCollectionEvenDisable } from "../db/dbHelper"
import { COLLECTION } from "../db/collection"
import _ from "lodash"

export const getAllPlanning = async (): Promise<Planning[]> => {
    const allPlanningHours = await getAllDataFromCollection(COLLECTION.PLANNING)
    return _.map(allPlanningHours, (planningHour) => (Planning.fromDb(planningHour)))
}


export const getAllPlanningEvenDisabled = async (): Promise<Planning[]> => {
    const allPlanningHours = await getAllDataFromCollectionEvenDisable(COLLECTION.PLANNING)
    return _.map(allPlanningHours, (planningHour) => (Planning.fromDb(planningHour)))
}

export const deleteAllPlanningWithCoursId = async (coursId: string):Promise<void> => {
    const allPlanning = await getAllPlanningEvenDisabled()
    let allPlanningAssociatedWithCoursId = _.filter(allPlanning, ['coursId', coursId])
    if(allPlanningAssociatedWithCoursId.length) {
        for (const planningItem of allPlanningAssociatedWithCoursId) {
            await deletePlanning(planningItem.id)
        }
    }
    
}


export const createPlanning = async(planning: Planning) => {
    const newPlanningHour = await addDocumentToCollection(COLLECTION.PLANNING, planning.toDb())
    return newPlanningHour
}

export const deletePlanning = async(planningId: string): Promise<void> =>  await deleteDocumentFromCollection(COLLECTION.PLANNING, planningId)

export const updatePlanning = async(planning: Planning): Promise<void> => await updateDocumentToCollection(COLLECTION.PLANNING, planning.id, planning.toDb())
