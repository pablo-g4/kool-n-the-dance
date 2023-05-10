export const errorResponse = (messageText: string) => {
    return {
        status: 'false',
        message: messageText
    }
}


export const formatDateDDMMYY = (unixTimeStamp: number) => {    
    return new Date(unixTimeStamp * 1000).toLocaleDateString("fr-FR")
}

export const getUnixTimeStamp = (dateAsUnixTimeStamp: Date) => {
    return dateAsUnixTimeStamp.getTime()
}