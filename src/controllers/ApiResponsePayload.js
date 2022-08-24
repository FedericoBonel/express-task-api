/**
 * JSON Object that should be returned on each api endpoint
 */
class ApiResponsePayload {
    /**
     * Creates a new Api Response Payload, i.e: A json object following the structure {status: Boolean, data|error:{}|String}
     * @param {Boolean} success If the request was processed successfully
     * @param {any} data Data requested or error object if it the request was unsuccessful
     */
    constructor(success, data) {
        this.success = success;
        if (!success) {
            this.error = data;
        } else {
            this.data = data;
        }
    }
}

module.exports = ApiResponsePayload;
