export default (url, customHeaders = {}) => {
    //auto assign an empty object to customHeaders if it is null or undefined
    const defaultHeaders = {
        Method: 'GET',
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
    const headers = {
        ...defaultHeaders,
        ...customHeaders
    }
    return fetch(url, headers)
        .then((response) => {
            if (response.status >= 400) {
                //throw new Error(response.status)
                Promise.reject(null, response.status)
            }
            return response.json()
        })
        .catch((error, statusCode) => {
            //do stuff with statusCode
        })
}