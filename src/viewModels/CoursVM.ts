import { Cours } from "../Models/Cours";
import { Files } from "../Models/Files";

export class CoursVM extends Cours {

    public imageFile: Files = new Files()

    constructor(){ super() }

    static fromCours(cours: Cours): CoursVM {
        let coursVM = new CoursVM()
        coursVM.courseType = cours.courseType
        coursVM.creationDate = cours.creationDate 
        coursVM.description = cours.description
        coursVM.id = cours.id
        coursVM.imageFileId = cours.imageFileId
        coursVM.isActive = cours.isActive
        coursVM.title = cours.title
        coursVM.updatedDate = cours.updatedDate
        return coursVM
    }

    toCours(): Cours {
        let cours = new Cours()
        cours.courseType = this.courseType
        cours.creationDate = this.creationDate
        cours.description = this.description
        cours.id = this.id 
        cours.imageFileId = this.imageFileId
        cours.isActive = this.isActive
        cours.title = this.title
        cours.updatedDate = this.updatedDate
        return cours
    }


    get imageUrl() {
        return this.imageFile.fileUrl
    }
}