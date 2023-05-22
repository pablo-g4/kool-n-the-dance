export class utils {

    static errorResponse = (messageText: string) => {
        return {
            status: 'false',
            message: messageText
        }
    }

    static formatDateDDMMYY = (unixTimeStamp: number) => new Date(unixTimeStamp).toLocaleDateString("fr-FR")

    static getUnixTimeStamp = (dateAsUnixTimeStamp: Date) => dateAsUnixTimeStamp.getTime()

    static formatUnixTimeStampToDate = (unixTimeStamp: number) => new Date(unixTimeStamp)

}

