import { Cours } from "../Models/Cours"
import { Forfait } from "../Models/Forfait"
import { Files } from "../Models/Files"

export class ForfaitVM extends Forfait {

    public associatedCourses: Cours[] = []
    public imageFile: Files = new Files()


    static fromForfait(forfait: Forfait): ForfaitVM {
        let forfaitVM = new ForfaitVM()
        forfaitVM.associatedCoursesId = forfait.associatedCoursesId
        forfaitVM.category = forfait.category
        forfaitVM.creationDate = forfait.creationDate
        forfaitVM.customerType = forfait.customerType
        forfaitVM.description = forfait.description
        forfaitVM.id = forfait.id
        forfaitVM.imageFileId = forfait.imageFileId
        forfaitVM.isActive = forfait.isActive
        forfaitVM.isBasic = forfait.isBasic
        forfaitVM.price = forfait.price
        forfaitVM.title = forfait.title
        forfaitVM.isActive = forfait.isActive
        return forfaitVM
    }

    toForfait(): Forfait {
        let forfait = new Forfait()
        forfait.associatedCoursesId = this.associatedCoursesId 
        forfait.category = this.category
        forfait.creationDate = this.creationDate 
        forfait.customerType = this.customerType
        forfait.description = this.description
        forfait.id = this.id
        forfait.imageFileId = this.imageFileId
        forfait.isActive = this.isActive
        forfait.isBasic = this.isBasic
        forfait.price = this.price
        forfait.title = this.title
        forfait.isActive = this.isActive
        return forfait 
    }

}