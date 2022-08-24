const mongoose = require("mongoose");
const DOCUMENT_NAME = "Task";

/**
 * Database Task abstraction
 */
const schema = new mongoose.Schema({
    _id: String,
    description: {
        type: String,
        required: [true, "Must be provided"],
        trim: true,
        maxlength: [120, "Name must have at most 120 characters"],
    },
    completed: { type: Boolean, default: false },
});

/**
 * Model to interact with database
 */
const model = mongoose.model(DOCUMENT_NAME, schema);

module.exports = model;
