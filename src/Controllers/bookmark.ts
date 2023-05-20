import _ from "lodash"
import { COLLECTION } from "../db/collection"
import { addDocumentToCollection, deleteDocumentFromCollection, getAllDataFromCollection } from "../db/dbHelper"
import { Bookmark } from "../Models/Bookmark"

export const getAllBookmarks = async ():Promise<Bookmark[]> => {
    const bookmarks = await getAllDataFromCollection(COLLECTION.BOOKMARKS)
    return _.map(bookmarks, bookmark => Bookmark.fromDb(bookmark))
}

export const createBookmark = async (bookmark: Bookmark):Promise<string> =>  await addDocumentToCollection(COLLECTION.BOOKMARKS, bookmark.toDb())

export const deleteBookmark = async (bookmarkId: string):Promise<void> => await deleteDocumentFromCollection(COLLECTION.BOOKMARKS, bookmarkId)

