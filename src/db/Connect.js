const mongoose = require("mongoose");

/**
 * Connects to the given mongodb database
 * @param {String} url of the database to connect to 
 * @returns {Promise} Promise of the connection 
 */
const connect = (url) => {
    return mongoose.connect(url);
};

module.exports = connect;