const Payload = require("../controllers/ApiResponsePayload");

const notFound = (req, res) =>
    res.status(404).send(new Payload(false, `Path '${req.url}' not found!`));
module.exports = notFound;
