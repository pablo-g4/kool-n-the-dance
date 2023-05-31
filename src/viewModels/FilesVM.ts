import { Bookmark } from "../Models/Bookmark"
import { Files } from "../Models/Files"

export class FilesVM extends Files {

    public bookmark: Bookmark = new Bookmark()

    static fromFiles(file: Files):FilesVM {
        let filesVM = new FilesVM()
        filesVM.associatedCollection = file.associatedCollection
        filesVM.creationDate = file.creationDate
        filesVM.fileName = file.fileName
        filesVM.fileUrl = file.fileUrl
        filesVM.id = file.id
        filesVM.isActive = file.isActive
        filesVM.updatedDate = file.updatedDate
        return filesVM
    }

    toFiles(): Files {
        let file = new Files()
        file.associatedCollection = this.associatedCollection
        file.creationDate = this.creationDate
        file.fileName = this.fileName
        file.fileUrl = this.fileUrl
        file.id = this.id
        file.isActive = this.isActive
        file.updatedDate = this.updatedDate
        return file
    }
} 