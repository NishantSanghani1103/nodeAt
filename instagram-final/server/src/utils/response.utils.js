


export const response = async (res, returnResponse) => {

    let { status, statusCode, message, data, count, error, token } = returnResponse;
    // console.log(message);
    
    if (statusCode === 500) {
        return res.status(500).json({
            status,
            message
        });
    }
    // Send the JSON response with the status code and data
    return res.status(statusCode).json({
        status,
        message,
        data
    });
};



