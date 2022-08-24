/**
 * Custom error to throw when api problems happen
 */
class ApiError extends Error {
    /**
     *
     * @param {String} message The error message to show the user
     * @param {Number} statusCode The http code that this error represents
     */
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

/**
 * Helper function that creates and throws a new ApiError
 */
const throwApiError = (message, statusCode) => {
    return new ApiError(message, statusCode);
};

module.exports = { ApiError, throwApiError };
