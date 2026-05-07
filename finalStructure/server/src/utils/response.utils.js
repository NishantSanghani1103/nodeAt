export const response = async (res, returnResponse) => {
    let { status, statusCode, message, data, count, error, token } = returnResponse;


    if (statusCode === 500) {
        return res.status(statusCode).json({
            status,
            message,
            data
        })
    }
    return res.status(statusCode).json({
        status,
        message,
        data,
        ...(token && { token })
    })
}