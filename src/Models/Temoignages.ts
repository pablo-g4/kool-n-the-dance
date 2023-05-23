import { Database } from "../Models/Database";

export class Temoignages extends Database {

    public prenom: string = ""
    public nom: string = ""
    public description: string = ""
    public imageUrl: string = ""
    public stars: number = 0

    constructor() {
        super()
    }

    static fromDb(objDb: any):Temoignages {

        let temoignages = new Temoignages()

        temoignages.prenom = objDb.prenom
        temoignages.nom = objDb.nom
        temoignages.description = objDb.description
        temoignages.imageUrl = objDb.image_url
        temoignages.stars = objDb.stars

        temoignages.id = objDb.id
        temoignages.isActive = objDb.is_active
        temoignages.creationDate = objDb.creation_date
        temoignages.updatedDate = objDb.updated_date

        return temoignages

    }

    toDb():any {
        return {
            prenom: this.prenom,
            nom: this.nom,
            description: this.description,
            image_url:this.imageUrl,
            stars: this.stars,
            is_active: this.isActive,
        }
    }

    get fullName() {
        return this.prenom + ' ' + this.nom
    }
}