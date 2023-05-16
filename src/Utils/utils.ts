export const errorResponse = (messageText: string) => {
    return {
        status: 'false',
        message: messageText
    }
}


export const formatDateDDMMYY = (unixTimeStamp: number) => {    
    return new Date(unixTimeStamp).toLocaleDateString("fr-FR")
}

export const getUnixTimeStamp = (dateAsUnixTimeStamp: Date) => {
    return dateAsUnixTimeStamp.getTime()
}

export const formatUnixTimeStampToDate = (unixTimeStamp : number) => {
    return new Date(unixTimeStamp)
}