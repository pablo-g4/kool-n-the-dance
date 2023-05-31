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

    toFiles(filesVM: FilesVM): Files {
        let file = new Files()
        file.associatedCollection = filesVM.associatedCollection
        file.creationDate = filesVM.creationDate
        file.fileName = filesVM.fileName
        file.fileUrl = filesVM.fileUrl
        file.id = filesVM.id
        file.isActive = filesVM.isActive
        file.updatedDate = filesVM.updatedDate
        return file
    }
} 