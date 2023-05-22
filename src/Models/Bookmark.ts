import { Database } from "./Database"

export class Bookmark extends Database {

    public bookmarkdId = ""


    constructor(){
        super()
    }

    static fromDb(objDb: any):Bookmark {
        let bookmark = new Bookmark()
        bookmark.id = objDb.id
        bookmark.bookmarkdId = objDb.bookmark_id
        bookmark.creationDate = objDb.creation_date
        bookmark.updatedDate = objDb.updated_date
        bookmark.isActive = objDb.is_active
        return bookmark
    }

    toDb(): any {
        return {
            bookmark_id: this.bookmarkdId,
            is_active: this.isActive
        }
    }
}