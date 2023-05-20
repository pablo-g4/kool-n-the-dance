import { Database } from "./Database"

export enum INFORMATION_TYPE {
    PHONE_NUMBER = 'phoneNumber',
    FACEBOOK_LINK = 'facebookLink',
}

export class GeneralInformations extends Database {

    public phoneNumber: string = ""
    public facebookLink: string = ""
    public headerImageUrl: string = ""

    constructor(){
        super()
    }

    static fromDb(objDb: any):GeneralInformations {
        let generalInformations = new GeneralInformations()
        generalInformations.id = objDb.id
        generalInformations.phoneNumber = objDb.phone_number
        generalInformations.facebookLink = objDb.facebook_link
        generalInformations.headerImageUrl = objDb.header_image_url
        generalInformations.isActive = objDb.is_active
        return generalInformations
    }

    toDb(): any {
        return {
            phone_number: this.phoneNumber,
            facebook_link: this.facebookLink,
            header_image_url: this.headerImageUrl,
            is_active: this.isActive,
        }
    }
}