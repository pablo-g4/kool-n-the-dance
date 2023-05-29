export class Database {
    
    public id: string = ""
    public isActive: boolean = true
    public creationDate:number = Math.round(+new Date()/1000)  
    public updatedDate: number = Math.round(+new Date()/1000)  

    constructor(){}
}