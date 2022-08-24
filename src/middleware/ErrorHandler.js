const Payload = require("../controllers/ApiResponsePayload");
const { ApiError } = require("../Errors/ApiError");

/**
 * Error handler for errors
 */
const errorHandler = (error, req, res, next) => {
    if (error instanceof ApiError) {
        return res.status(error.statusCode).json(new Payload(false, error.message));
    }
    res.status(500).json(new Payload(false, error));
};

module.exports = errorHandler;
