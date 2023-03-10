export const errorResponse = (messageText: string) => {
    return {
        status: 'false',
        message: messageText
    }
}