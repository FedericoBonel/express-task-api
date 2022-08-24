/**
 * Middleware that calls to the async handler function and catches any errors that may happen
 * and passes it to the corresponding error handler middleware (the express default one)
 */
const asyncWrapper = (handler) => {
    // The res, req, and next will be injected by express since this wrapper
    // will be used and executed in a route
    return async (res, req, next) => {
        try {
            await handler(res, req, next);
        } catch (error) {
            next(error);
        }
    };
};

module.exports = asyncWrapper;
