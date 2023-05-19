export enum INFORMATION_TYPE {
    PHONE_NUMBER = 'phone_number',
    LINK = 'link',
}

export class Informations {

    public id: string = ""
    public value: string = ""

    constructor(public informationType: INFORMATION_TYPE ){}

    static fromDb(objDb: any):Informations  {
        let informations = new Informations(objDb.information_type)
        informations.id = objDb.id
        informations.value = objDb.value
        return informations
    }

    toDb(): any {
        return {
            information_type: this.informationType,
            value: this.value
        }
    }
}