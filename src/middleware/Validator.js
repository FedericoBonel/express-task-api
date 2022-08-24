const { body, validationResult } = require("express-validator");

/**
 * Validates the request body
 */
const validateRules = (req, res, next) => {
    const validationRes = validationResult(req);

    if (!validationRes.isEmpty()) {
        return res.status(400).json({ sucess: false, error: validationRes.array() });
    }

    next();
};

/**
 * Set of middleware functions that validates a task payload
 */
const taskRules = [
    body("description")
        .isLength({ min: 4, max: 120 })
        .withMessage("Description length must be 4 to 120 inclusive"),
    body("completed").isBoolean().optional().withMessage("Must be boolean"),
    validateRules
];


module.exports = { taskRules, validateRules };
